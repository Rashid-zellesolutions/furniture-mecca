import React from 'react'
import './OrderSummery.css'
import userIcon from '../../../Assets/icons/user-icon.png';
import orderIcon from '../../../Assets/icons/order-detail-icon.png'
import rightArrow from '../../../Assets/icons/right-arrow-white.png'

const OrderSummery = () => {
    const orderAndPrice = [
        {orderName: 'Monaco 3 PC Modular Sectional with 2 Chaise, Grey, Sectional', price: '$ 1955.00'},
        {orderName: 'Monaco 3 PC Modular Sectional with 2 Chaise, Grey, Sectional', price: '$ 1955.00'},
        {orderName: 'Monaco 3 PC Modular Sectional with 2 Chaise, Grey, Sectional', price: '$ 1955.00'},
        {orderName: 'Monaco 3 PC Modular Sectional with 2 Chaise, Grey, Sectional', price: '$ 1955.00'},
        {orderName: 'Monaco 3 PC Modular Sectional with 2 Chaise, Grey, Sectional', price: '$ 1955.00'},
        {orderName: 'Monaco 3 PC Modular Sectional with 2 Chaise, Grey, Sectional', price: '$ 1955.00'}
    ]

    const summeryTotal = [
        {name: 'Sub Total', price: '$ 1955'},
        {name: 'Shipping', price: '$ 258' },
        {name: 'Total', price: '$ 1858'}
    ]
  return (
    <>
        <div className='summery-main-container'>
            <div className='summery-heading-div'>
                <h3>Summary</h3>
                <button>&times;</button>
            </div>
            <p className='summery-order-number'>Order # 123456</p>
            <div className='summery-user-name-and-icon'>
                <img src={userIcon} alt='user' />
                <p>Customer</p>
            </div>
            <div className='summery-user-name-and-number'>
                <div className='summery-user-name'>
                    <h3>Mehmat Aksu</h3>
                    <p>025463827635</p>
                </div>
                <div className='summery-user-address'>
                    <p>
                        Rasimpasa Mah. Hilataga Cad. no 55: D4 Kidiaym, Istanbul Turkey
                    </p>
                </div>
            </div>
            <div className='summery-order-details-icon'>
                <img src={orderIcon} alt='order icon' />
                <p>Order Details</p>
            </div>
            <div className='summery-orders-div'>
                {orderAndPrice.map((item, index) => (
                    <div className='summery-orders-and-price'>
                    <div className='summery-orders'>
                            <p>{item.orderName}</p>
                            <div className='order-under-line-div'>
                                <div className='order-under-line'></div>
                            </div>
                        </div>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
            <div className='summery-total-price'>
                {summeryTotal.map((item, index) => (
                    <div className='summer-total'>
                        <p>{item.name}</p>
                        <h3>{item.price}</h3>
                    </div>    
                ))}
            </div>
            <div className='summery-contact-use'>
                <div className='summery-problame-and-contact'>
                    <p>Do you have a problem with your order?</p>
                    <h3>Contact us</h3>
                </div>
            </div>
            <div className='return-home-btn'>
                <button>Return Home 
                    <img src={rightArrow} alt='right' />
                </button>
            </div>
        </div>
        <div className='desktop-summery-main-container'>
                <div className='desktop-summery-main-div'>
                    <h3>Summery</h3>
                    <p>Order # 123456</p>
                    <div className='desktop-customer-details'>
                        <img src={userIcon} alt='user' />
                        <p>Customer</p>
                    </div>
                    <div className='desktop-user-and-address'>
                        <div className='desktop-user-and-number'>
                            <h3>Mehmat Aksu</h3>
                            <p>025463827635</p>
                        </div>
                        <p>
                            Rasimpasa Mah. Hilataga Cad. no 55: D4 Kidiaym, Istanbul Turkey
                        </p>
                    </div>
                    <div className='desktop-order-heading'>
                        <img src={orderIcon} alt='icon' />
                        <p>Order Details</p>
                    </div>
                    <div className='desktop-order-details-main'>
                        {orderAndPrice.map((items, index) => (
                            <div className='dektop-order-and-price'>
                                <div className='desktop-orders'>
                                    <p>Monaco 3 PC Modular Sectional with 2 Chaise, Grey, Sectional</p>
                                    <div className='desktop-order-under-line-div'>
                                        <div className='desktop-order-under-line'></div>
                                    </div>
                                </div>
                                <p>$ 1955.00</p>
                            </div>
                        ))}
                        
                    </div>
                    <div className='desktop-price-total-div'>
                        {summeryTotal.map((item, index) => (
                            <div className='desktop-total'>
                                <p>{item.name}</p>
                                <h3>{item.price}</h3>
                            </div>
                        ))}
                    </div>
                    <div className='desktop-contact-us'>
                        <p>Do you have a problem with your order?</p>
                        <h3>Contact us</h3>
                    </div>
                </div>
                <div className='desktop-order-track'>
                    <h3>Location</h3>
                </div>
        </div>
    </>
  )
}

export default OrderSummery
