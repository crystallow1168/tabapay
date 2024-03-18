import './Header.css';
import logo from '../../assets/hogwarts-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { MenuItem } from '../../App';

interface HeaderProps {
  handleGetMenuItem: (itemName: MenuItem) => void;
}

const Header: FC<HeaderProps> = ({ handleGetMenuItem }) => {
  const navigate = useNavigate();

  const handleNavigateToDefaultPage = () => {
    handleGetMenuItem({ id: '', name: '' });
    navigate('/');
  };

  return (
    <>
      <div className='logo' onClick={handleNavigateToDefaultPage}>
        <Link to='/'>
          <img src={logo} alt='Logo' />
        </Link>
      </div>
      <div className='header'>Hogwarts</div>
    </>
  );
};

export default Header;
