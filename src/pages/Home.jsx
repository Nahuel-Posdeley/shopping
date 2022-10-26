import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { unsetUser } from '../reducers/User/userSlice';
import ProductsList from '../components/ProductList';
import { useState } from 'react';
import { useEffect } from 'react';
import  Axios  from 'axios';
import './stylehome.css';

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user);
  const [products,setProducts] = useState([]);
  const [userLoading,setUserLoading] = useState(true)

  

  useEffect(()=>{
    Axios.get('https://dummyjson.com/products')
    .then(res => {
      setProducts(res.data.products)
    })
      const timer = setTimeout(() => setUserLoading(false), 3000);
      return () => clearTimeout(timer);
  },[])

  const handleLogout = () => {
    dispatch(unsetUser())
    navigate('/')
  }
  return (
    <div>
      {userLoading && <h3 className='item__user__loading'>Bienvenido {user.fullName}</h3>}
      <ProductsList products={products} />
    </div>
  )
}

export default Home