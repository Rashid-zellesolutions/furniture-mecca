import React, { useState, useRef, useEffect } from 'react';
import './BestSellerSlider.css';
import BestSellerSliderMainBanner from '../../../Assets/Furniture Mecca/Landing Page/best seller products/Bedroom Side Banners 2 (2).png';
import heartIcon from '../../../Assets/icons/like.png'
import arrowLeft from '../../../Assets/icons/arrow-left.png'
import arrowRight from '../../../Assets/icons/arrow-right.png'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import CheckSlider from '../check-check/CheckSlider';



const BestSellerSlider = () => {

    const bestSellerNav = ['Living Room', 'Bedroom', 'Dining Room']
    
    const [loading, setLoading] = useState(false); 
    const [activeItem, setActiveItem] = useState(0)
    const navigate = useNavigate()

    const handleActiveItem = (index) => {
        setActiveItem(index)
        setLoading(true); // Show loader
        setTimeout(() => {
            setActiveItem(index);
            setLoading(false); // Hide loader after 2 seconds
        }, 1000);
    }
    const productCardData = useSelector((state) => state.productCard.data)
    const handleProductClick = (item) => {
        navigate(`/single-product/${item.id}`, { state: { productCard: item } });
        console.log(`card clicked /single-product/${item.id}`)
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerRow = 3;
    const rows = 2;
    const itemsPerPage = itemsPerRow * rows;
    const totalItems = productCardData.length;
    const maxIndex = Math.ceil(totalItems / itemsPerPage) - 1;
    const sliderRef = useRef(null);

    useEffect(() => {
        if (sliderRef.current) {
            const containerWidth = sliderRef.current.scrollWidth;
            sliderRef.current.style.width = `${containerWidth}px`;
        }
    }, [productCardData]);

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => (prevIndex < maxIndex ? prevIndex + 1 : 0));
    };

    const offset = -currentIndex * 100; 


    const handleLoader = (index) => {
        setLoading(true); // Show loader
        setTimeout(() => {
            setActiveItem(index);
            setLoading(false); // Hide loader after 2 seconds
        }, 2000);
    };

//     const [currentIndex, setCurrentIndex] = useState(0);

//   const totalPages = Math.ceil(productCardData.length / itemsPerPage);

//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };

//   const offset = -currentIndex * 100; 


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
                {loading && <Loader />} {/* Show loader when loading */}
                {/* <CheckSlider /> */}
                <div className='best-seller-slider' style={{ transform: `translateX(${offset}%)` }} >
                    {productCardData.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage).map((item, index) => (
                        <div key={index} className='best-seller-product-card-div' onClick={() => handleProductClick(item)}>
                            <img src={item.mainImage} alt='img' className='best-seller-product-main-image' />
                            <span className='product-rating-span'>
                                {item.ratingStars.map((star, starIndex) => (
                                    <img key={starIndex} src={star.starIcon} alt='star' />
                                ))}
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
                    ))}
                </div>

                {/* <div className='best-seller-slider' style={{ transform: `translateX(${offset}%)` }}>
                    {productCardData
                    .slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
                    .map((item, index) => (
                        <div key={index} className='best-seller-product-card-div' onClick={() => handleProductClick(item)}>
                        <img src={item.mainImage} alt='img' className='best-seller-product-main-image' />
                        <span className='product-rating-span'>
                            {item.ratingStars.map((star, starIndex) => (
                            <img key={starIndex} src={star.starIcon} alt='star' />
                            ))}
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
                    ))}
                </div>
                <div className='pagination-dots'>
                    {Array.from({ length: totalPages }).map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                    ))}
                </div> */}
            </div>
        </div>
    </div>
  );
};

export default BestSellerSlider;
