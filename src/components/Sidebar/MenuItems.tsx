import './Sidebar.css';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../../App';

interface MenuItemProps {
  item: MenuItem;
  selectedMenuItem: MenuItem;
  handleSelectedItem: (itemName: MenuItem, menuIdList: string[], parentId: string) => void;
  handleOpenModal: () => void;
  parentPath?: string;
  menuIdList: string[];
  parentId: string;
}

const MenuItems: FC<MenuItemProps> = ({
  item,
  selectedMenuItem,
  handleSelectedItem,
  handleOpenModal,
  menuIdList,
  parentId
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = `contents/${item.name?.replace(/\s+/g, '-')}`;

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
    if (item) {
      handleSelectedItem(item, menuIdList, parentId);
      handleOpenModal();
    }
  };

  useEffect(() => {
    if (menuIdList?.includes(item.id)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [menuIdList]);

  return (
    <>
      <div className='menu-item-container'>
        <Link
          to={currentPath}
          state={item}
          className={`${'menu-item-link'} ${
            selectedMenuItem.id === item.id ? 'menu-item-selected' : ''
          }`}
        >
          <div onClick={toggleOpen}>
            <span
              className={`${
                item.items
                  ? isOpen
                    ? 'arrow-down'
                    : 'arrow-right'
                  : selectedMenuItem.id === item.id
                  ? 'dot selected'
                  : 'dot'
              }`}
            ></span>
            {item.name}
          </div>
        </Link>
      </div>
      {item.items &&
        isOpen &&
        item.items.map((subItem) => (
          <div className='menu-item' key={subItem.id}>
            <MenuItems
              item={subItem}
              selectedMenuItem={selectedMenuItem}
              handleSelectedItem={handleSelectedItem}
              handleOpenModal={handleOpenModal}
              menuIdList={menuIdList}
              parentId={item.id}
            />
          </div>
        ))}
    </>
  );
};

export default MenuItems;
