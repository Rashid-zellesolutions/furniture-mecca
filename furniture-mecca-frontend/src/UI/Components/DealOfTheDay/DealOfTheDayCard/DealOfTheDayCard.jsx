import React, {useRef, useEffect, useState} from 'react';
import './DealOfTheDayCard.css';
import testImage from '../../../../Assets/Furniture Mecca/product page/frequently bought/MN600__04-300x200 1.png'
import star from '../../../../Assets/icons/Star 19.png'
import cartIcon from '../../../../Assets/icons/big-black-cart.png';
import heartIcon from '../../../../Assets/icons/red-heart-without-circle.png';
import combinedArrows from '../../../../Assets/icons/combined-arrow-icon.png'
import leftArrow from '../../../../Assets/icons/arrow-left-white.png';
import rightArrow from '../../../../Assets/icons/right-arrow-white.png';


const products = [
  { id: 1, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$20', imageUrl: testImage, rating: ' reviews',  stock: 11, sold: 50, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 2, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$30', imageUrl: testImage, rating: ' reviews', stock: 8, sold: 30, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 3, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$40', imageUrl: testImage, rating: ' reviews', stock: 15, sold: 80, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 4, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$50', imageUrl: testImage, rating: ' reviews', stock: 5, sold: 20, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 5, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$20', imageUrl: testImage, rating: ' reviews', stock: 10, sold: 50, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 6, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$30', imageUrl: testImage, rating: ' reviews', stock: 8, sold: 30, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 7, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$40', imageUrl: testImage, rating: ' reviews', stock: 15, sold: 80, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 8, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$50', imageUrl: testImage, rating: ' reviews', stock: 5, sold: 20, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 9, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$20', imageUrl: testImage, rating: ' reviews', stock: 10, sold: 50, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 10, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$30', imageUrl: testImage, rating: ' reviews', stock: 8, sold: 30, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 11, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$40', imageUrl: testImage, rating: ' reviews', stock: 15, sold: 80, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 12, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$50', imageUrl: testImage, rating: ' reviews', stock: 5, sold: 20, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  // Add more products here
];

const DealOfTheDayCard = () => {
      // product slice to show 6 product maxx

      const itemPerPage = 4;
      const [currentIndex, setCurrentIndex] = useState(0);
  
      const totalPages = Math.ceil(products.length / itemPerPage);
      
  
      
      const handlePrevClick = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
      }
      const handleNextClick = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + 1, totalPages - 1));
      }

      const displayProducts = products.slice(currentIndex * itemPerPage, (currentIndex + 1) * itemPerPage);

  const [isImageHovered, setImageHovered] = useState(null);
  const cartAndHeartIcon = [cartIcon, heartIcon, combinedArrows];
  const handleMouseEntered = (index) => {
    setImageHovered(index);
  }
  const handleMouseLeave = () => {
    setImageHovered(null)
  }
    
  return (
    <div className='deal-of-the-day-card-main-div'>
      <button className='deal-of-the-day-arrow deal-of-the-day-left ' onClick={handlePrevClick} disabled={currentIndex === 0}>
        <img src={leftArrow} alt='left' />
      </button>
        <div className="deal-of-the-day-slider-wrapper">
        <div className="deal-of-the-day-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
      {displayProducts.map((product, index) => (
        <div key={product.id} className="deal-of-the-day-product-card">
          <div className='deal-of-the-day-rating-div'>
            {product.stars.map((star, index) => (
              <img key={index} src={star.icon} alt='icon' className='deal-of-the-day-rating-star' />
            ))}
            <p >({product.rating})</p>
          </div>
          <h3 className='deal-of-the-day-product-name'>{product.name}</h3>
          <div className='deal-of-the-day-prices'>
            <del>$199.00</del>
            <p>$1599.00</p>
          </div>
          <div className='deal-of-the-day-product-image-div' onMouseEnter={() => handleMouseEntered(index)} onMouseLeave={handleMouseLeave}>
            <p className='deal-of-the-day-discount-tag'>-12%</p>
            <img src={product.imageUrl} alt='img' className='deal-of-the-day-product-image' />
            <div className={`deal-of-the-day-image-icons-section ${isImageHovered === index ? 'deal-of-the-day-show-icons' : ''}`}>
              {cartAndHeartIcon.map((item, index) => (
                <button key={index}>
                  <img src={item} alt='cart' />
                </button>
              ))}
            </div>
          </div>
          <hr className='deal-of-the-day-line' />
        </div>
      ))}
      </div>
    </div>
      <button className='deal-of-the-day-arrow deal-of-the-day-right' onClick={handleNextClick}>
        <img src={rightArrow} alt='right' />
      </button>
    </div>
    
  );
};

export default DealOfTheDayCard;
