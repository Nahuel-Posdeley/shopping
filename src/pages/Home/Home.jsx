import React from 'react'
import ProductsList from '../../components/Products/ProductList';
import { useState } from 'react';
import { useEffect } from 'react';
import  Axios  from 'axios';

const Home = () => {
  const [products,setProducts] = useState([]);

  

  useEffect(()=>{
    Axios.get('https://dummyjson.com/products')
    .then(res => {
      setProducts(res.data.products)
    })
  },[])

  return (
    <div>
      <ProductsList products={products} />
    </div>
  )
}

export default Home