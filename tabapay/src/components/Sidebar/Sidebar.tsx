import './Sidebar.css';
import MenuItems from './MenuItems';
import { useState } from 'react';

const sampleMenu: Menu = {
  name: 'Root',
  items: [
    {
      name: 'Parent A',
      items: [
        { name: 'Child A1' },
        {
          name: 'Child Parent A2',
          items: [{ name: 'Child A2-1' }, { name: 'Child A2-2' }],
        },
      ],
    },
    {
      name: 'Parent B',
      items: [
        { name: 'Child B1' },
        { name: 'Child B2' },
        {
          name: 'Child  Parent B3',
          items: [{ name: 'Child B3-1' }, { name: 'Child B3-2' }],
        },
      ],
    },
  ],
};

export interface MenuItemProps {
  item: MenuItem;
}

interface MenuItem {
  name: string;
  items?: MenuItem[];
}

interface Menu {
  name: string;
  items: MenuItem[];
}

const SideBar = () => {
  const { name, items } = sampleMenu;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id='sidebar'>
      <div onClick={toggleOpen}>
        <span className={isOpen ? 'arrow-down' : 'arrow-right'}></span>
        {name}
      </div>
      {isOpen &&
        items.map((menuItem) => (
          <div key={menuItem.name}>
            <MenuItems item={menuItem} />
          </div>
        ))}
    </div>
  );
};

export default SideBar;
