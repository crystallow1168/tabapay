import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SideBar from './components/Sidebar/Sidebar';
import Layout from './components/Layout/Layout';
import sampleMenu from './data/sampleMenu.json';

function App() {

  return (
    <>
      <SideBar />
      <Routes>
        <Route path='/' element={<Navigate to='/contents' />} />{' '}
        <Route path='/contents' element={<Layout />} >
        {sampleMenu.items.map((item) => (
          <Route
            path={`/contents/:${item.name.replace(/\s+/g, '-')}`}
            element={<Layout item={item} />}
          />
        ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
