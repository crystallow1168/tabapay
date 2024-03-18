import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import SideBar from './components/Sidebar/Sidebar';
import Layout from './components/Layout/Layout';
import sampleMenu from './data/sampleMenu.json';
import { useCallback, useState } from 'react';
import Header from './components/Header/Header';

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  items?: MenuItem[];
}

function App() {
  const [selectedMenuItem, setSelectedItem] = useState<MenuItem>({
    id: '',
    name: '',
  });

  const handleGetMenuItem = useCallback((menuItem: MenuItem) => {
    setSelectedItem(menuItem);
  }, []);

  return (
    <>
      <div className='container'>
        <Header handleGetMenuItem={handleGetMenuItem} />
      </div>
      <div className='main-container'>
        <SideBar
          handleGetMenuItem={handleGetMenuItem}
          selectedMenuItem={selectedMenuItem}
        />
        <Routes>
          <Route path='/' element={<Navigate to='/contents' />} />{' '}
          <Route
            path='/contents'
            element={<Layout selectedMenuItem={selectedMenuItem} />}
          >
            {sampleMenu.items.map((item) => (
              <Route
                path={`/contents/:${item.name.replace(/\s+/g, '-')}`}
                element={<Layout selectedMenuItem={selectedMenuItem} />}
                key={item.id}
              />
            ))}
          </Route>
        </Routes>
      </div>
      <div className='container'>Footer</div>
    </>
  );
}

export default App;
