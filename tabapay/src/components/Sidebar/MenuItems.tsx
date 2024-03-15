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
      <div onClick={toggleOpen}>{name}</div>
      {items && isOpen && (
        <div>
          {items.map((subItem, index) => (
            <MenuItems key={index} item={subItem} />
          ))}
        </div>
      )}
    </>
  );
};

export default MenuItems;
