import React, { useState } from 'react'
import './CartItems.css';
import minusBtn from '../../../../Assets/icons/minus-white.png';
import plusBtn from '../../../../Assets/icons/plus-white.png';
import closeBtn from '../../../../Assets/icons/close-btn.png';
import deleteBtn from '../../../../Assets/icons/delete-red.png';
import plusCharcol from '../../../../Assets/icons/plus.png';
import minusCharcol from '../../../../Assets/icons/minus.png'

const CartItems = ({cartProductName, cartPRoductImage, cartProductColor, cartProductTitle, cartProductOldPrice, 
    cartProductNewPrice}) => {
  
    const [quantity, setQuantity] = useState(0)
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }
    const decreaseQuantity = () => {
        if(quantity > 0){
            setQuantity(quantity - 1);
        }
    }


    return (
    <>
        <div className='cart-product'>
            <div className='cart-item-name'>
                <h3>{cartProductName}</h3>
                <button>
                    <img src={closeBtn} alt='close btn' />
                </button>
            </div>
            <div className='cart-product-containt'>
                <div className='cart-item-image'>
                    <img src={cartPRoductImage} alt='product image' />
                </div>
                <div className='cart-product-details'>
                    <p>{cartProductColor}</p>
                    <p>{cartProductTitle}</p>
                    <div className='price-and-count'>
                        <p>{cartProductOldPrice}</p>
                        <div className='product-count'>
                            <button onClick={decreaseQuantity}>
                                <img src={minusBtn} alt='minus' />
                            </button>
                            <p>{quantity}</p>
                            <button onClick={increaseQuantity}>
                                <img src={plusBtn} alt='plus' />
                            </button>
                        </div>
                    </div>
                    <div className='cart-item-actual-price'>
                        <p>{cartProductNewPrice} </p>
                    </div>
                </div>
            </div>
        </div>
        {/* Desktop view Card */}
        <div className='desktop-cart-product'>
            <div className='desktop-cart-product-image'>
                <img src={cartPRoductImage} alt='product image' />
            </div>
            <div className='desktop-cart-containt'>
                <div className='desktop-cart-product-name-and-quantity'>
                    <div className='desktop-cart-product-name'>
                        <h3>{cartProductName}</h3>
                    </div>
                    <div className='desktop-quantity-and-new-price'>
                        <div className='desktop-quantity'>
                            <button onClick={decreaseQuantity}>
                                <img src={minusCharcol} alt='minus' />
                            </button>
                            <p>{quantity}</p>
                            <button onClick={increaseQuantity}>
                                <img src={plusCharcol} alt='plus' />
                            </button>
                        </div>
                        <p className='desktop-new-price'>{cartProductNewPrice}</p>
                    </div>
                </div>
                <div className='desktop-cart-old-price-and-delete'>
                    <p className='desktop-old-price'>{cartProductOldPrice}</p>
                    <button>
                        <img src={deleteBtn} alt='delete btn' />
                        <p>Remove Item</p>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CartItems
