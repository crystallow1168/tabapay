import './Sidebar.css';
import { FC, useState } from 'react';

export interface MenuItem {
  id: string;
  name: string;
  items?: MenuItem[];
}

interface MenuItemProps {
  item: MenuItem;
  handleGetItemName: (itemName: string) => void;
  handleOpenModal: () => void;
}

const MenuItems: FC<MenuItemProps> = ({
  handleOpenModal,
  handleGetItemName,
  item,
}) => {
  const { name, items } = item;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (name: string) => {
    setIsOpen((prevState) => !prevState);
    handleGetItemName(name);
    handleOpenModal();
  };

  return (
    <>
      <div onClick={() => toggleOpen(name)}>
        <span
          className={items ? (isOpen ? 'arrow-down' : 'arrow-right') : 'dot'}
        ></span>
        {name}
      </div>
      {items &&
        isOpen &&
        items.map((subItem) => (
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
