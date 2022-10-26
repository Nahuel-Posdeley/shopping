import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeProductToCart } from '../reducers/Cart/cartSlice';
import './style.css';

const Cart = () => {
    const dispatch = useDispatch();
    const { productList } = useSelector(state => state.cart)
    console.log(productList)
    const handleRemoveProduct = (productId) => dispatch(removeProductToCart(productId))
    return (
    <div>
        <h1>Cart</h1>
        <table>
            <thead>
             <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
             </tr>
            </thead>
            <tbody>
                {
                    productList.map(product => {
                        return (
                            <tr key={product.id}>
                                <th>{product.id}</th>
                                <td>{product.title}</td>
                                <td> ${product.price}</td>
                                <td>{product.category}</td>
                                <td>
                                    <button
                                        onClick={()=> handleRemoveProduct(product.id)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Cart