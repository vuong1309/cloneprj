import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import Signup from './pages/Signup';
import Login from './pages/Login';
import './App.css';
import Account from './pages/Account.js';
import Search from './pages/Search';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<Account />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </>
  );
}

export default App;