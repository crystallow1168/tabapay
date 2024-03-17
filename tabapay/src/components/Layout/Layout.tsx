import { FC } from 'react';
import { MenuItem } from '../Sidebar/MenuItems';

interface LayoutProps {
  item?: MenuItem;
}

const Layout: FC<LayoutProps> = ({ item }) => {
  console.log('item', item);

  return (
    <>
      <div>
        <h1>Hello</h1>
        <h1>{item?.name}</h1>
      </div>
    </>
  );
};

export default Layout;
