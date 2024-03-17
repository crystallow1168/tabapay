import './Sidebar.css';
import { FC, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import Modal from '../Modal/Modal';
import sampleMenu from '../../data/sampleMenu.json';

interface SidebarProps {
  handleGetItemName: (itemName: string) => void;
  selectedItemName: string;
}

const SideBar: FC<SidebarProps> = ({ handleGetItemName, selectedItemName }) => {
  const { name, items } = sampleMenu;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  // const [selectedItem, setSelectedItem] = useState<string>('');

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  // const handleGetItemName = (itemName: string) => {
  //   setSelectedItem(itemName);
  // };

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
      <Modal
        open={showModal}
        onClose={toggleModal}
        itemName={selectedItemName}
      />
      <Link to={'/contents'} className='menu-item-link'>
        <div onClick={() => handleSelectedItem(name)}>
          <span className={isOpen ? 'arrow-down' : 'arrow-right'}></span>
          {name}
        </div>
      </Link>
      {isOpen &&
        items.map((menuItem) => (
          <div className='menu-item' key={menuItem.id}>
            <MenuItems
              item={menuItem}
              handleGetItemName={handleGetItemName}
              handleOpenModal={handleOpenModal}
            />
          </div>
        ))}
    </div>
  );
};

export default SideBar;
