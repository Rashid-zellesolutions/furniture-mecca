import React from 'react'
import './CartProducts.css';
import CartItems from '../Cart-items/CartItems';
import productImage from '../../../../Assets/Furniture Mecca/Cart Page/products/web-image-1-600x400 1.png'
import minusBtn from '../../../../Assets/icons/minus-white.png';
import plusBtn from '../../../../Assets/icons/plus-white.png';

const CartProducts = () => {
    const cartData = [
        {
            id: 1, name: "Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat", img: productImage, color: 'White', 
            title: '3 Pieces Sofa & Love Seat', oldPrice: '$ 1,599.00', newPrice: '$ 3198.00' 
        },
        {
            id: 1, name: "Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat", img: productImage, color: 'White', 
            title: '2 Pieces Sofa & Love Seat', oldPrice: '$ 1,599.00', newPrice: '$ 3198.00' 
        },
        {
            id: 1, name: "Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat", img: productImage, color: 'White', 
            title: '2 Pieces Sofa & Love Seat', oldPrice: '$ 1,599.00', newPrice: '$ 3198.00' 
        },
    ]
  return (
    <div className='cart-products-main-container'>
        <div className='cart-products-heading'>
            <h3>Products (3)</h3>
        </div>
        <div className='cart-items'>
            {cartData.map((items, index) => {
                return <CartItems key={index} cartItemData={items} />
            })}
            
        </div>
        <div className='cart-item-details'>
            <div className='cart-item-details-heading'>
                <h3>Details</h3>
            </div>
        </div>
    </div>
  )
}

export default CartProducts
