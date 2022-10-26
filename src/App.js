import { Link, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Index from './pages/Index/Index';
import { BsCartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import './App.css';

function App() {
  const {productList} = useSelector(state => state.cart)

  return (
    <>
      <div className='container__menu'>
        <Link to='/home'>Home</Link>
        <div>
          <Link className='btn__cart' to='/cart'>
            <BsCartFill size={24} />
            <div>{productList.length}</div>
          </Link>
          <Link className='btn__login' to='/'>Login</Link>
        </div>
      </div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Index />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
