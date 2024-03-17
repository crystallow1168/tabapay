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
import { useState } from 'react';

function App() {
  const [selectedItemName, setSelectedItemName] = useState<string>('');

  const handleGetItemName = (itemName: string) => {
    setSelectedItemName(itemName);
  };

  return (
    <>
      <SideBar
        handleGetItemName={handleGetItemName}
        selectedItemName={selectedItemName}
      />
      <Routes>
        <Route path='/' element={<Navigate to='/contents' />} />{' '}
        <Route
          path='/contents'
          element={<Layout selectedItemName={selectedItemName} />}
        >
          {sampleMenu.items.map((item) => (
            <Route
              path={`/contents/:${item.name.replace(/\s+/g, '-')}`}
              element={<Layout selectedItemName={selectedItemName} />}
              key={item.id}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
