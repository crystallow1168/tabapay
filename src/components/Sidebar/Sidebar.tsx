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
  const [menuIdList, setMenuIdList] = useState<string[]>([]);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleOpenModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleParentToggle = (
    currentItemId: string,
    currentList: string[],
    parentId: string
  ) => {
    setMenuIdList((prevList) => {
      if (currentList === undefined) {
        return [...prevList, currentItemId];
      } else {
        const parentIndex = currentList.indexOf(parentId);
        const newList = currentList.slice(0, parentIndex + 1);
        newList.push(currentItemId);
        return newList;
      }
    });
  };

  const handleSelectedItem = useCallback(
    (item: MenuItem, menuIdList: string[], parentId: string) => {
      handleGetMenuItem(item);
      handleParentToggle(item.id, menuIdList, parentId);
      handleOpenModal();
    },
    [handleGetMenuItem, handleOpenModal]
  );

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
          menuIdList={menuIdList}
          parentId={sampleMenu.id}
        />
      </div>
    </div>
  );
};

export default SideBar;
