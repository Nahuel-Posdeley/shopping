import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { unsetUser } from '../reducers/User/userSlice';
import ProductsList from '../components/ProductList';
import { useState } from 'react';
import { useEffect } from 'react';
import  Axios  from 'axios';

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user);
  const [products,setProducts] = useState([]);

  useEffect(()=>{
    Axios.get('https://dummyjson.com/products')
    .then(res => {
      setProducts(res.data.products)
    })
  },[])

  const handleLogout = () => {
    dispatch(unsetUser())
    navigate('/')
  }
  return (
    <div>
      <h1>Bienvenido {user.fullName}</h1>

      <ProductsList products={products} />
    </div>
  )
}

export default Home