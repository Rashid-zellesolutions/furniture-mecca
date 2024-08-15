import React, { useState } from 'react';
import './BestSellerSlider.css';
import BestSellerSliderMainBanner from '../../../Assets/Furniture Mecca/Landing Page/best seller products/Bedroom Side Banners 2 (2).png';
import heartIcon from '../../../Assets/icons/like.png'
import arrowLeft from '../../../Assets/icons/arrow-left.png'
import arrowRight from '../../../Assets/icons/arrow-right.png'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const BestSellerSlider = () => {

    const bestSellerNav = ['Living Room', 'Bedroom', 'Dining Room']
    const [activeItem, setActiveItem] = useState(0)
    const navigate = useNavigate()

    const handleActiveItem = (index) => {
        setActiveItem(index)
    }
    const productCardData = useSelector((state) => state.productCard.data)
    const handleProductClick = (item) => {
        navigate(`/single-product/${item.id}`, { state: { productCard: item } });
        console.log(`card clicked /single-product/${item.id}`)
    };

  return (
    <div className="best-seller-slider-container">
        <div className='best-seller-slider-main-banner'>
            <img src={BestSellerSliderMainBanner} alt='main banner' />
        </div>
        <div className='best-seller-slider-div'>
            <div className='best-seller-slider-menu-bar'>
                <h3>Best Seller</h3>
                <div className='best-seller-menu-bar'>
                {bestSellerNav.map((item, index) => (
                <p
                    key={index}
                    className={activeItem === index ? 'active' : ''}
                    onClick={() => handleActiveItem(index)}
                >
                    {item}
                </p>
            ))}
                </div>
            </div>
            <div className='products-slider-container'>
                <button className='product-slider-arrow left'> <img src={arrowLeft} alt="left" /> </button>
                <div className='best-seller-slider'>
                    {productCardData.map((item, index) => {
                        return <div key={index} onClick={() => handleProductClick(item)}  className='best-seller-product-card-div'>
                        <img src={item.mainImage} alt='img' />
                        <span className='product-rating-span'>
                            {item.ratingStars.map((star, starIndex) => {
                                return <img key={starIndex} src={star.starIcon} alt='star' />
                            })}
                            
                            <p>{item.reviews}</p>
                        </span>
                        <p className='productmain-name'>{item.productTitle}</p>
                        <div className='price-and-heart'>
                            <span>
                                <del>{item.defaultPrice}</del>
                                <p>{item.priceTag}</p>
                            </span>
                            <img src={heartIcon} alt='heart' />
                        </div>
                    </div>
                    })}
                    
                </div>
                <button className='product-slider-arrow right'> <img src={arrowRight} alt="right" /> </button>
            </div>
        </div>
    </div>
  );
};

export default BestSellerSlider;
