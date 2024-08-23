import React from 'react'
import './CartProducts.css';
import CartItems from '../Cart-items/CartItems';
import productImage from '../../../../Assets/Furniture Mecca/Cart Page/products/web-image-1-600x400 1.png'
import minusBtn from '../../../../Assets/icons/minus-white.png';
import plusBtn from '../../../../Assets/icons/plus-white.png';
import { Link } from 'react-router-dom';

const CartProducts = () => {

    // Slide page to right
    // function openNav() {
    //     document.getElementById("myNav").style.width = "100%";
    //     console.log("open nav clicked")
    //   }
      
    //   function closeNav() {
    //     document.getElementById("myNav").style.width = "0%";
    //   }

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
        {
            id: 1, name: "Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat", img: productImage, color: 'White', 
            title: '2 Pieces Sofa & Love Seat', oldPrice: '$ 1,599.00', newPrice: '$ 3198.00' 
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
        <div className='cart-items'>
            {cartData.map((items, index) => {
                return <CartItems key={index} 
                            cartProductName={items.name} 
                            cartPRoductImage={items.img} 
                            cartProductColor={items.color} 
                            cartProductTitle={items.title}
                            cartProductOldPrice={items.oldPrice} 
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
        <div className='desktop-cart-item-details'>
            <div className='desktop-price-details-div'>
                {detailsDeta.map((item, index) => {
                    return <div key={index} className='dektop-price-details'>
                        <p className='desktop-price-title'>{item.title}</p>
                        <p className='desktop-price-total'>{item.price}</p>
                    </div>
                })}
            </div>
            <div className='desktop-continue-btn-div'>
                <button>
                    Continue
                </button>
            </div>
        </div>
    </div>


    {/* <div className="overlay-content">
      <div id="myNav" className="overlay">
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
  <div>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
</div>

<h2>Fullscreen Overlay Nav Example</h2>
<p>Click on the element below to open the fullscreen overlay navigation menu.</p>
<p>In this example, the navigation menu will slide in, from left to right:</p>
<span style={{fontSize:'30px', cursor: 'pointer'}} onClick={openNav}>&#9776; open</span>
    </div> */}
    </>
  )
}

export default CartProducts
