import './Sidebar.css';

const menu: Menu = {
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

interface MenuItem {
  name: string;
  items?: MenuItem[];
}

interface Menu {
  name: string;
  items: MenuItem[];
}

const SideBar = () => {
  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <ul key={menuItem.name}>
        {menuItem.name}
        {menuItem.items && (
          <ul>
            {menuItem.items.map((item) => (
              <div key={item.name}>{renderMenuItem(item)}</div>
            ))}
          </ul>
        )}
      </ul>
    );
  };

  return (
    <div id='sidebar'>
      <h3>{menu.name}</h3>
      {menu.items.map((menuItem) => (
        <div key={menuItem.name}>{renderMenuItem(menuItem)}</div>
      ))}
    </div>
  );
};

export default SideBar;
