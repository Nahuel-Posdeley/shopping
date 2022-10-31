import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeProductToCart } from '../../reducers/Cart/cartSlice';
import './style.css';
import { BsFillTrashFill } from 'react-icons/bs';
const Cart = () => {
    const dispatch = useDispatch();
    const { productList } = useSelector(state => state.cart)
    const handleRemoveProduct = (productId) => dispatch(removeProductToCart(productId))
    return (
    <div>
        <h1 className='title__cart'>Carrito de compras</h1>
        <table>
            <thead>
             <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Categoria</th>
                <th>Acciones</th>
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
                                    <BsFillTrashFill
                                        size={20}
                                        onClick={()=> handleRemoveProduct(product.id)}
                                    />
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        {
            productList.length <= 0 && <div className='container__cart__empty'>
            <h3>Tu carrito está vacío</h3>
            <p>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>
        </div> 
        }
    </div>
  )
}

export default Cart