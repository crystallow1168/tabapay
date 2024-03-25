import './Sidebar.css';
import { FC, useCallback, useState } from 'react';
import MenuItems from './MenuItems';
import Modal from '../Modal/Modal';
import sampleMenu from '../../data/sampleMenu.json';
import { MenuItem } from '../../App';

interface SidebarProps {
  handleGetMenuItem: (itemName: MenuItem) => void;
  selectedMenuItem: MenuItem;
}

const SideBar: FC<SidebarProps> = ({ handleGetMenuItem, selectedMenuItem }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleOpenModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleSelectedItem = useCallback((item: MenuItem) => {
    handleGetMenuItem(item);
    handleOpenModal();
  }, [handleGetMenuItem, handleOpenModal]);

  return (
    <div id='sidebar'>
      <Modal
        open={showModal}
        onClose={toggleModal}
        itemName={selectedMenuItem.name}
      />
      <div className='menu-item-container'>
        <MenuItems
          item={sampleMenu}
          selectedMenuItem={selectedMenuItem}
          handleSelectedItem={handleSelectedItem}
          handleOpenModal={handleOpenModal}
        />
      </div>
    </div>
  );
};

export default SideBar;
