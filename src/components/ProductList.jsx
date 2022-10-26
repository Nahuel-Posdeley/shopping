import React from 'react';
import { addProductToCart, removeProductToCart } from '../reducers/Cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';

const ProductLIst = ({products}) => {
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
  return (
    <div className='container__card'>
        {
            products && products.map(item => {
              return (
                <div className='container__item' key={item.id}>
                  <div className='container__discount'>
                    <p style={{color: 'white'}}>Discount of ${item.discountPercentage}</p>
                  </div>
                  <img src={item.thumbnail} alt={item.title} />
                      <h4>{item.title}</h4>
                      <b>${item.price}</b>
                      <p>{item.description}</p>
                      <button
                        className={`${productList.find(pdt => pdt.id === item.id) ? 'btn_remove' : 'btn_add'}`}
                        onClick={() => handleOnRemoveProduct(item.id)}
                        >
                          {productList.find(pdt => pdt.id === item.id) ? 'REMOVE' : 'ADD TO CART'}
                      </button>
                    </div>
              )
            })
        }
    </div>
  )
}

export default ProductLIst