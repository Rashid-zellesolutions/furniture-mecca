import React, { useState, useEffect } from 'react'
import './CartProducts.css';
import CartItems from '../Cart-items/CartItems';
import productImage from '../../../../Assets/Furniture Mecca/Cart Page/products/web-image-1-600x400 1.png'
import CartPaymnetMethoud from '../CArtAddPaymentMethoud/CartPaymnetMethoud';
// import minusBtn from '../../../../Assets/icons/minus-white.png';
// import plusBtn from '../../../../Assets/icons/plus-white.png';
// import { Link } from 'react-router-dom';

const CartProducts = () => {

    // const [activeBullet, setActiveBullet] = useState(0);
    // const [isPaymentTrue, setIsPaymentTrue] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
      };

    // const handleBulletClick = (index) => {
    //     setActiveBullet(index);
    //     setIsPaymentTrue(index === 1);
    // };
    // useEffect(() => {
    //     if (!isOpen) {
    //       setActiveBullet(0);
    //       setIsPaymentTrue(false);
    //     }
    //   }, [isOpen]);

    //   const [otherBillingChecked, setOtherBillingChecked] = useState(false);
    //   const handleOtherBilling = (event) => {
    //     setOtherBillingChecked(event.target.checked);
    //   }

    //   const handleCheckedIndex = () => {
    //     setActiveBullet(1);
    //     setIsPaymentTrue(true);
    //   }

    const cartData = [
        {
            id: 1, name: "Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat", img: productImage, color: 'White', 
            title: '3 Pieces Sofa & Love Seat', oldPrice: 1599.00 , newPrice: '$ 3198.00' 
        },
        {
            id: 1, name: "Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat", img: productImage, color: 'White', 
            title: '2 Pieces Sofa & Love Seat', oldPrice: 1599.00 , newPrice: '$ 3198.00' 
        },
        {
            id: 1, name: "Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat", img: productImage, color: 'White', 
            title: '2 Pieces Sofa & Love Seat', oldPrice: 1599.00 , newPrice: '$ 3198.00' 
        },
        {
            id: 1, name: "Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat", img: productImage, color: 'White', 
            title: '2 Pieces Sofa & Love Seat', oldPrice: 1599.00 , newPrice: '$ 3198.00'  
        },
    ]

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
            <h3>Products (3)</h3>
        </div>
        <div className={`cart-items ${isOpen ? 'low-width' : ''}`}>
            {cartData.map((items, index) => {
                return <CartItems key={index} 
                            cartProductName={items.name} 
                            cartPRoductImage={items.img} 
                            cartProductColor={items.color} 
                            cartProductTitle={items.title}
                            cartProductOldPrice={'$ ' + items.oldPrice} 
                            cartProductNewPrice={items.newPrice} />
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
        <div className={`desktop-cart-item-details`}>
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
