import './Sidebar.css';
import MenuItems from './MenuItems';
import { useCallback, useState } from 'react';
import Modal from '../Modal/Modal';

const sampleMenu: Menu = {
  name: 'Root',
  items: [
    {
      name: 'Parent A',
      items: [
        { name: 'Child A1' },
        {
          name: 'Child Parent A2',
          items: [{ name: 'Child A2-1' }, { name: 'Child A2-2' }],
        },
      ],
    },
    {
      name: 'Parent B',
      items: [
        { name: 'Child B1' },
        { name: 'Child B2' },
        {
          name: 'Child  Parent B3',
          items: [{ name: 'Child B3-1' }, { name: 'Child B3-2' }],
        },
      ],
    },
  ],
};

interface Menu {
  name: string;
  items: MenuItem[];
}

export interface MenuItem {
  name: string;
  items?: MenuItem[];
}

const SideBar = () => {
  const { name, items } = sampleMenu;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>('');

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleGetItemName = (itemName: string) => {
    setSelectedItem(itemName);
  };

  const handleOpenModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleSelectedItem = useCallback(
    (itemName: string) => {
      toggleOpen();
      handleGetItemName(itemName);
      handleOpenModal();
    },
    [toggleOpen, handleGetItemName, handleOpenModal]
  );

  return (
    <div id='sidebar'>
      <Modal open={showModal} onClose={toggleModal} itemName={selectedItem} />
      <div onClick={() => handleSelectedItem(name)}>
        <span className={isOpen ? 'arrow-down' : 'arrow-right'}></span>
        {name}
      </div>
      {isOpen &&
        items.map((menuItem) => (
          <MenuItems
            key={menuItem.name}
            item={menuItem}
            handleGetItemName={handleGetItemName}
            handleOpenModal={handleOpenModal}
          />
        ))}
    </div>
  );
};

export default SideBar;
