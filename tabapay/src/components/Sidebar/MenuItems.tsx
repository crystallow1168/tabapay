import './Sidebar.css';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

export interface MenuItem {
  id: string;
  name: string;
  items?: MenuItem[];
}

interface MenuItemProps {
  item: MenuItem;
  handleGetItemName: (itemName: string) => void;
  handleOpenModal: () => void;
  parentPath?: string;
}

const MenuItems: FC<MenuItemProps> = ({
  handleOpenModal,
  handleGetItemName,
  item,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = `contents/${item.name.replace(/\s+/g, '-')}`;

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
    handleGetItemName(item.name);
    handleOpenModal();
  };

  return (
    <>
      <Link to={currentPath} state={item} className='menu-item-link'>
        <div onClick={toggleOpen}>
          <span
            className={
              item.items ? (isOpen ? 'arrow-down' : 'arrow-right') : 'dot'
            }
          ></span>
          {item.name}
        </div>
      </Link>
      {item.items &&
        isOpen &&
        item.items.map((subItem) => (
          <div className='menu-item' key={subItem.id}>
            <MenuItems
              item={subItem}
              handleGetItemName={handleGetItemName}
              handleOpenModal={handleOpenModal}
            />
          </div>
        ))}
    </>
  );
};

export default MenuItems;
