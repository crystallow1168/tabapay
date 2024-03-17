import { FC } from 'react';

interface LayoutProps {
  selectedItemName: string;
}

const Layout: FC<LayoutProps> = ({ selectedItemName }) => {
  return (
    <>
      <div>
        <h1>{selectedItemName}</h1>
      </div>
    </>
  );
};

export default Layout;
