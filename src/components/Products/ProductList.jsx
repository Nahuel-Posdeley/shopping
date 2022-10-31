import React, { useState } from 'react';
import { addProductToCart, removeProductToCart } from '../../reducers/Cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import ErrSearch from '../ErrSearch/ErrSearch';


const ProductList = ({products}) => {
  const [search,setSearch] = useState('')
  const dispatch = useDispatch();
  const { productList} = useSelector(state => state.cart);

const handleOnRemoveProduct = (productId) => {
  const product = products.find(item => item.id === productId);
  if(productList.find(pdt => pdt.id === productId)){
    dispatch(removeProductToCart(productId))
  }else{
    dispatch(addProductToCart(product))
  }
}
  let data = []
 
    if(!search){
      data = products
    }else{
      let dataProduct = products.filter(item => item.title.toLowerCase().includes(search.toLocaleLowerCase()))
       data = dataProduct
    }


  return (
    <>
    <div className='container__search'>
      <input placeholder='buscador' className='input__search' value={search} onChange={(e)=> setSearch(e.target.value)}/>
    </div>
    <h1 className='title__products'>Nuevas recomendaciones</h1>
      <div className='container__card'>
        {
            data.length > 0 ? data.map(item => (
                <div className='container__item' key={item.id}>
                  <div className='container__discount'>
                    <p style={{color: 'white' }}>Discount of ${item.discountPercentage}</p>
                  </div>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    width={200}
                    height={200}
                  />
                      <h4>{item.title}</h4>
                      <b>${item.price}</b>
                      <p>{item.description.slice(0,50)}</p>
                      <button
                        className={`${productList.find(pdt => pdt.id === item.id) ? 'btn_remove' : 'btn_add'}`}
                        onClick={() => handleOnRemoveProduct(item.id)}
                        >
                          {productList.find(pdt => pdt.id === item.id) ? 'REMOVE' : 'ADD TO CART'}
                      </button>
                    </div>
              )
            ) : <ErrSearch />
        }
      </div>
    </>
  )
}

export default ProductList