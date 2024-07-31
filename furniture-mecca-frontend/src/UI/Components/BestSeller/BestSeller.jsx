import React, { useState } from 'react';
import './BestSeller.css';
import BestSellerProductCard from '../BestSellerProductCard/BestSellerProductCard';
import productImageOne from '../../../Assets/images/best-seller-one.png';
import productImageTwo from '../../../Assets/images/best-seller-two.png';
import productImageThree from '../../../Assets/images/best-seller-three.png';
import productImageFour from '../../../Assets/images/best-seller-four.png';
import productImageFive from '../../../Assets/images/best-seller-five.png';
import productImageSix from '../../../Assets/images/best-seller-six.png';
import bannerOne from '../../../Assets/images/best-seller-banner-one.png';
import bannerTwo from '../../../Assets/images/best-seller-banner-two.png';
import heartIcon from '../../../Assets/icons/like.png'
import starIcon from '../../../Assets/icons/Star 19.png';

const BestSeller = () => {
    const bestSellerNav = ['Living Room', 'Bedroom', 'Dining Room']
    const [activeItem, setActiveItem] = useState(0)

    const handleActiveItem = (index) => {
        setActiveItem(index)
    }

    const productCardData = [
        {name: "Stevie Charcoal 87'' Sofa & Chair", defaultPrice: '$ 199.00', offerPrice: '$ 1,599.00', heartIcon: heartIcon, productImage: productImageOne, stars: [
            {starIcon: starIcon},
            {starIcon: starIcon},
            {starIcon: starIcon},
            {starIcon: starIcon},
            {starIcon: starIcon},
            ], reviews: '(200)' 
        },
        {name: "Stevie Charcoal 87'' Sofa & Chair", defaultPrice: '$ 199.00', offerPrice: '$ 1,599.00', heartIcon: heartIcon, productImage: productImageTwo, stars: [
            {starIcon: starIcon},
            {starIcon: starIcon},
            {starIcon: starIcon},
            {starIcon: starIcon},
            {starIcon: starIcon},
            ], reviews: '(200)' 
        },
        {name: "Stevie Charcoal 87'' Sofa & Chair", defaultPrice: '$ 199.00', offerPrice: '$ 1,599.00', heartIcon: heartIcon, productImage: productImageThree, stars: [
            {starIcon: starIcon},
            {starIcon: starIcon},
            {starIcon: starIcon},
            {starIcon: starIcon},
            {starIcon: starIcon},
            ], reviews: '(200)' 
        },
        {name: "Stevie Charcoal 87'' Sofa & Chair", defaultPrice: '$ 199.00', offerPrice: '$ 1,599.00', heartIcon: heartIcon, productImage: productImageFour, stars: [
            {starIcon: starIcon},
            {starIcon: starIcon},
            {starIcon: starIcon},
            {starIcon: starIcon},
            {starIcon: starIcon},
            ], reviews: '(200)' 
        },
        {name: "Stevie Charcoal 87'' Sofa & Chair", defaultPrice: '$ 199.00', offerPrice: '$ 1,599.00', heartIcon: heartIcon, productImage: productImageFive, stars: [
            {starIcon: starIcon},
            {starIcon: starIcon},
            {starIcon: starIcon},
            {starIcon: starIcon},
            {starIcon: starIcon},
            ], reviews: '(200)' 
        },
        {name: "Stevie Charcoal 87'' Sofa & Chair", defaultPrice: '$ 199.00', offerPrice: '$ 1,599.00', heartIcon: heartIcon, productImage: productImageSix, stars: [
            {starIcon: starIcon},
            {starIcon: starIcon},
            {starIcon: starIcon},
            {starIcon: starIcon},
            {starIcon: starIcon},
            ], reviews: '(200)' 
        },

    ]

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
                    return <BestSellerProductCard heartIcon={item.heartIcon} 
                        productMainImage={item.productImage} 
                        starIcon={item.stars} 
                        reviews={item.reviews} 
                        productName={item.name}
                        oldPrice={item.defaultPrice}
                        newPrice={item.offerPrice}
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
