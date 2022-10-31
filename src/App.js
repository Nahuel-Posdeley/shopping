import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Index from './pages/Index/Index';
import { BsCartFill } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Registration from './pages/Registration/Registration';
import { useState } from 'react';
import { unsetUser } from './reducers/User/userSlice';

function App() {
  const {productList} = useSelector(state => state.cart)
  const [stateLogin,setStateLogin] = useState(false);
  const {name} = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(unsetUser())
    setStateLogin(false)
    navigate('/')
  }
  return (
    <>
      <div className='menu'>
      <div className='container__menu'>
      {name && <div className='container__user' style={{color: 'white'}}>
        <BiUserCircle size={30} />
        <p>{name}</p>
      </div>}
        <Link className='btn__home' to='/home'>
          <FaHome size={24} />   
          Inicio
        </Link>
        <Link className='btn__cart' to='/cart'>
          <BsCartFill size={24} />
          <div>{productList.length}</div>
        </Link>
        {stateLogin ? <Link className='btn__login' onClick={handleLogout}>
          Salir
          <FiLogIn size={24} />
        </Link> : <Link className='btn__login' to='/'>
          Iniciar sesion
          <FiLogIn size={24} />
        </Link>
  }
      </div>
      </div>
      <Routes>
        <Route path='/' element={<Index setStateLogin={setStateLogin} />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
