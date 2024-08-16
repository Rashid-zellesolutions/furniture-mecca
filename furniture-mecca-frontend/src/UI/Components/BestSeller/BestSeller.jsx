import React, { useState } from 'react';
import './BestSeller.css';
import BestSellerProductCard from '../BestSellerProductCard/BestSellerProductCard';
import bannerOne from '../../../Assets/images/best-seller-banner-one.png';
import bannerTwo from '../../../Assets/images/best-seller-banner-two.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';

const BestSeller = () => {
    const bestSellerNav = ['Living Room', 'Bedroom', 'Dining Room']
    const [activeItem, setActiveItem] = useState(0)

    const handleActiveItem = (index) => {
        setActiveItem(index)
    };

    const productCardData = useSelector((state) => state.productCard.data)

    const navigate = useNavigate()
    
    const handleProductClick = (item) => {
        navigate(`/single-product/${item.id}`, { state: { productCard: item } });
        console.log("Clicked on ", item.id);
    }

  return (
    <div className='best-seller-main-container'>
        <div className='best-seller-cards-container'>
            <div className='best-seller-menu'>
                <h3>Best Sellers</h3>
                <div className='best-seller-nav-items'>
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
            <div className='best-seller-cards'>
                {productCardData.map((item, index) => {
                    return <BestSellerProductCard key={index} heartIcon={item.heartIcon} 
                        productMainImage={item.mainImage} 
                        starIcon={item.ratingStars} 
                        reviews={item.reviews} 
                        productName={item.productTitle}
                        oldPrice={item.defaultPrice}
                        newPrice={item.priceTag}
                        handleCardClicked={() => handleProductClick(item)}
                    />
                })}
            </div>
        </div>
        <div className='best-seller-banners-container'>
            <img src={bannerOne} alt='banner one' />
            <img src={bannerTwo} alt='banner two' />
        </div>
    </div>
  )
}

export default BestSeller
