import { MenuItem } from '../../App';
import './Layout.css';
import { FC } from 'react';

interface LayoutProps {
  selectedMenuItem: MenuItem;
}

const Layout: FC<LayoutProps> = ({ selectedMenuItem }) => {
  return (
    <div id='layout'>
      {selectedMenuItem.name.length ? (
        <div className='layout-title'>{selectedMenuItem?.name}</div>
      ) : (
        <div className='empty-content-container'>Select menu to view content!</div>
      )}
    </div>
  );
};

export default Layout;
