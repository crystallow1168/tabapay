import { MenuItem } from '../../App';
import './Layout.css';
import { FC } from 'react';

interface LayoutProps {
  selectedMenuItem: MenuItem;
}

const Layout: FC<LayoutProps> = ({ selectedMenuItem }) => {
  const pageTitle = selectedMenuItem?.name || 'Select menu to view content!';

  return (
    <>
      <div id='layout'>{pageTitle}</div>
    </>
  );
};

export default Layout;
