import './Sidebar.css';
import { FC, useState } from 'react';
import { MenuItemProps } from './Sidebar';

const MenuItems: FC<MenuItemProps> = ({ item }) => {
  const { name, items } = item;

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='menu-item' onClick={toggleOpen}>
        <span
          className={items ? (isOpen ? 'arrow-down' : 'arrow-right') : 'dot'}
        ></span>
        {name}
      </div>
      {items && isOpen && (
        <div>
          {items.map((subItem, index) => (
            <div className='menu-item'>
              <MenuItems key={index} item={subItem} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MenuItems;
