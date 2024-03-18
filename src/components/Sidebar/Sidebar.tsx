import './Sidebar.css';
import { FC, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import Modal from '../Modal/Modal';
import sampleMenu from '../../data/sampleMenu.json';
import { MenuItem } from '../../App';

interface SidebarProps {
  handleGetMenuItem: (itemName: MenuItem) => void;
  selectedMenuItem: MenuItem;
}

const SideBar: FC<SidebarProps> = ({ handleGetMenuItem, selectedMenuItem }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleOpenModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleSelectedItem = useCallback(() => {
    toggleOpen();
    handleGetMenuItem(sampleMenu);
    handleOpenModal();
  }, [toggleOpen, handleGetMenuItem, handleOpenModal]);

  useEffect(() => {
    if (!selectedMenuItem.name.length) {
      setIsOpen(false);
    }
  }, [selectedMenuItem]);

  return (
    <div id='sidebar'>
      <Modal
        open={showModal}
        onClose={toggleModal}
        itemName={selectedMenuItem.name}
      />
      <div className='menu-item-container'>
        <Link
          to={'/contents'}
          className={`${'menu-item-link'} ${
            selectedMenuItem.id === sampleMenu.id ? 'menu-item-selected' : ''
          }`}
        >
          <div onClick={handleSelectedItem}>
            <span className={isOpen ? 'arrow-down' : 'arrow-right'}></span>
            {sampleMenu.name}
          </div>
        </Link>
      </div>
      {isOpen &&
        sampleMenu.items?.map((menuItem) => (
          <div className='menu-item' key={menuItem.id}>
            <MenuItems
              item={menuItem}
              selectedMenuItem={selectedMenuItem}
              handleGetMenuItem={handleGetMenuItem}
              handleOpenModal={handleOpenModal}
            />
          </div>
        ))}
    </div>
  );
};

export default SideBar;
