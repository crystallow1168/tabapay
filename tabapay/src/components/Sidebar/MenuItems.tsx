import './Sidebar.css';
import { FC, useState } from 'react';
import { MenuItem } from './Sidebar';

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
      <div className='menu-item' onClick={() => toggleOpen(name)}>
        <span
          className={items ? (isOpen ? 'arrow-down' : 'arrow-right') : 'dot'}
        ></span>
        {name}
      </div>
      {items &&
        isOpen &&
        items.map((subItem) => (
          <div className='menu-item'>
            <MenuItems
              key={subItem.name}
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
