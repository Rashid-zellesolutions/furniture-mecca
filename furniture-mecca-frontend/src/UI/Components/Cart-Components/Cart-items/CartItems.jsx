import React from 'react'
import './CartItems.css';
import productImage from '../../../../Assets/Furniture Mecca/Cart Page/products/web-image-1-600x400 1.png'
import minusBtn from '../../../../Assets/icons/minus-white.png';
import plusBtn from '../../../../Assets/icons/plus-white.png';
import closeBtn from '../../../../Assets/icons/close-btn.png'

const CartItems = ({cartItemData}) => {
  return (
    <div className='cart-product'>
        <div className='cart-item-name'>
            <h3>Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat</h3>
            <button>
                <img src={closeBtn} alt='close btn' />
            </button>
        </div>
        <div className='cart-product-containt'>
            <div className='cart-item-image'>
                <img src={productImage} alt='product image' />
            </div>
            <div className='cart-product-details'>
                <p>White</p>
                <p>2 Pieces Sofa & Love Seat</p>
                <div className='price-and-count'>
                    <p>$ 1,599.00</p>
                    <div className='product-count'>
                        <img src={minusBtn} alt='minus' />
                        <p>1</p>
                        <img src={plusBtn} alt='plus' />
                    </div>
                </div>
                <div className='cart-item-actual-price'>
                    <p>$ 3198.00 </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems
