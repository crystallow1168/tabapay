import './Sidebar.css';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../../App';

interface MenuItemProps {
  item: MenuItem;
  selectedMenuItem: MenuItem;
  handleSelectedItem: (itemName: MenuItem) => void;
  handleOpenModal: () => void;
  parentPath?: string;
}

const MenuItems: FC<MenuItemProps> = ({
  item,
  selectedMenuItem,
  handleSelectedItem,
  handleOpenModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = `contents/${item.name?.replace(/\s+/g, '-')}`;

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
    if (item) {
      handleSelectedItem(item);
      handleOpenModal();
    }
  };

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
            />
          </div>
        ))}
    </>
  );
};

export default MenuItems;
