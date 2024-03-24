import { MenuItem } from '../../App';
import './Layout.css';
import { FC, useEffect, useState } from 'react';

interface LayoutProps {
  item: MenuItem;
  selectedMenuItem: MenuItem;
}

const Accordian: FC<LayoutProps> = ({ item, selectedMenuItem }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const toggleAccordian = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setIsOpen(true);
  }, [selectedMenuItem])

  return (
    <div className='accordian-container' key={item.id}>
      <div className='accordian-header' onClick={toggleAccordian}>
        <div>{item.name}</div>
        <div className='toggle-icon'>
          {isOpen ? (
            <i className='fa fa-chevron-circle-up' aria-hidden='true'></i>
          ) : (
            <i className='fa fa-chevron-circle-down' aria-hidden='true'></i>
          )}
        </div>
      </div>

      {isOpen ? (
        <div className='accordian-description'>{item.description}</div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Accordian;
