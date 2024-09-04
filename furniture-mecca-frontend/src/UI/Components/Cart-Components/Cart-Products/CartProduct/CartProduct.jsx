import React from 'react'
import './CartProduct.css';
import cartImage from '../../../../../Assets/Furniture Mecca/Cart Page/products/Calcutta-Dining-Gold-5pc.jpg';
import { useCart } from '../../../../../context/cartContext/cartContext';

const CartProduct = () => {
    const {cart, removeFromCart, increamentQuantity, decreamentQuantity, calculateTotalPrice} = useCart()
  return (
    <div className='check-cart-main'>
        {cart.map((item, index) => (
            // items.product.map((item, inn) => (
                <div key={index} className='check-cart'>
                    <div className='check-img'>
                        <img src={item.product.mainImage} alt='img' />
                    </div>
                    <div>
                        <h3>{item.product.productTitle}</h3> 
                        <p>{item.productPrice}</p> 
                        <p>{item.totalPrice}</p> 
                        <p>{item.quantity}</p> 
                    </div>
                </div>
            // ))
        ))}
    </div>
)
}

export default CartProduct
