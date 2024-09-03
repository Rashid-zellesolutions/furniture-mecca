import React, { useState, useEffect } from 'react'
import './CartProducts.css';
import CartItems from '../Cart-items/CartItems';
// import productImage from '../../../../Assets/Furniture Mecca/Cart Page/products/web-image-1-600x400 1.png'
import productImage from '../../../../Assets/Furniture Mecca/Cart Page/everdeen-2.jpg';
import mixCheryImage from '../../../../Assets/Furniture Mecca/Cart Page/products/mix-chery-dining-set.jpg';
import culcuttaSetImage from '../../../../Assets/Furniture Mecca/Cart Page/products/Calcutta-Dining-Gold-5pc.jpg';
import thomasBrownSet from '../../../../Assets/Furniture Mecca/Cart Page/products/thomas-pub-dning-set-in-brown.jpg';
import thomasWhiteSet from '../../../../Assets/Furniture Mecca/Cart Page/products/thomas-pub-dining-set-in-white.jpg'
import CartPaymnetMethoud from '../CArtAddPaymentMethoud/CartPaymnetMethoud';
// import minusBtn from '../../../../Assets/icons/minus-white.png';
// import plusBtn from '../../../../Assets/icons/plus-white.png';
// import { Link } from 'react-router-dom';

const CartProducts = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
      };

      const [cartData, setCartData] = useState([
        {
            id: 1, name: "Max Cherry Pub Dining Set", img: mixCheryImage, color: 'brown', 
            title: '3 Pieces Sofa & Love Seat', singlePrice: 1099 , totalPrice: 599
        },
        {
            id: 1, name: "Culcutta Dining Room Set", img: culcuttaSetImage, color: 'Gold', 
            title: '2 Pieces Sofa & Love Seat', singlePrice: 699 , totalPrice: 1398 
        },
        {
            id: 1, name: "Thomas Pub Dining Set In Brown", img: thomasBrownSet, color: 'Brown', 
            title: '2 Pieces Sofa & Love Seat', singlePrice: 899 , totalPrice: 1798 
        },
        {
            id: 1, name: "Thomas Pub Dining Set In White", img: thomasWhiteSet, color: 'White', 
            title: '2 Pieces Sofa & Love Seat', singlePrice: 899 , totalPrice: 1798  
        },
      ])
    const removeProduct = (index) => {
        const updatedCArtData = cartData.filter((_, i) => i !== index);
        setCartData(updatedCArtData)
        console.log("index" , index)
        
    }

    const detailsDeta = [
        {title: 'Delivery', price: '$0'},
        {title: 'Discount', price: '$0'},
        {title: 'Sub Total', price: '$1599.00'},
        {title: 'Total', price: '$1599.00'}

    ]

  return (
    <>
    <div className='cart-products-main-container'>
        <div className='cart-products-heading'>
            <h3>Products ({cartData.length})</h3>
        </div>
        <div className={`cart-items ${isOpen ? 'low-width' : ''}`}>
            {cartData.map((items, index) => {
                return <CartItems key={index}
                            cartIndex={items.id}
                            productsLength={cartData.length}
                            handleRomoveProduct={() => removeProduct(items.id)}
                            cartProductName={items.name} 
                            cartPRoductImage={items.img} 
                            cartProductColor={items.color} 
                            cartProductTitle={items.title}
                            cartSingleProductPrice={items.singlePrice} 
                            isCartOpen={isOpen}
                            productColor={items.color}
                            cartProductTotalPrice={items.totalPrice} />
            })}
            
        </div>
        <div className='cart-item-details'>
            <div className='cart-item-details-heading'>
                <h3>Details</h3>
            </div>
            <div className='price-details-div'>
                {detailsDeta.map((item, index) => {
                    return <div key={index} className='price-details'>
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                    </div>
                })}
            </div>
            <div className='continue-btn'>
                <button>
                    Continue
                </button>
            </div>
        </div>

        {/* Desktop View */}
        <div className={`desktop-cart-item-details ${isOpen ? 'desktop-cart-item-div-padding-decrease' : ''}`}>
            <div className={`desktop-price-details-div ${isOpen ? 'desktop-price-div-decrease' : ''}`}>
                {detailsDeta.map((item, index) => {
                    return <div key={index} className='dektop-price-details'>
                        <p className='desktop-price-title'>{item.title}</p>
                        <p className='desktop-price-total'>{item.price}</p>
                    </div>
                })}
            </div>
            <div className={`desktop-continue-btn-div ${isOpen ? 'hide-continue-btn' : ''}`}>
                <button onClick={handleToggle}>
                    Continue
                </button>
            </div>
        </div>
        <CartPaymnetMethoud 
            isOpen={isOpen} 
            handleToggle={handleToggle}
        />
    </div>
    </>
  )
}

export default CartProducts
