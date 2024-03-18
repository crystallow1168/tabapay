import { MenuItem } from '../../App';
import './Layout.css';
import { FC } from 'react';

interface LayoutProps {
  selectedMenuItem: MenuItem;
}

const Layout: FC<LayoutProps> = ({ selectedMenuItem }) => {
  console.log('WHAT', selectedMenuItem);
  return (
    <div id='layout'>
      {selectedMenuItem.name.length ? (
        <div className='layout-title'>{selectedMenuItem?.name}</div>
      ) : (
        <div className='empty-content-container'>
          Select menu to view content!
        </div>
      )}
      <div>{selectedMenuItem.description}</div>

      {selectedMenuItem.items
        ? selectedMenuItem.items.map((item) => (
            <div className='accordian-container' key={item.id}>
              <div className='accordian-title'>{item.name}</div>
              <div className='accordian-description'>{item.description}</div>
            </div>
          ))
        : ''}
    </div>
  );
};

export default Layout;
