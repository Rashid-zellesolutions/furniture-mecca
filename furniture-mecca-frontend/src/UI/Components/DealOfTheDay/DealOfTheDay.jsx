import React, {useState, useRef, useEffect} from 'react'
import './DealOfTheDay.css';
import { useProducts } from '../../../context/productsContext/productContext';

import DealOfTheDayCard from './DealOfTheDayCard/DealOfTheDayCard';
import leftArrow from '../../../Assets/icons/arrow-left-white.png';
import rightArrow from '../../../Assets/icons/right-arrow-white.png';
import CustomSlider from '../CostumSlider/CostumSlider';


import testImage from '../../../Assets/Furniture Mecca/product page/frequently bought/MN600__04-300x200 1.png'
import star from '../../../Assets/icons/Star 19.png'
import cartIcon from '../../../Assets/icons/big-black-cart.png';
import heartIcon from '../../../Assets/icons/red-heart-without-circle.png';
import combinedArrows from '../../../Assets/icons/combined-arrow-icon.png'
// import leftArrow from '../../../../Assets/icons/arrow-left-white.png';
// import rightArrow from '../../../../Assets/icons/right-arrow-white.png';


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

const DealOfTheDay = () => {

    // Deal of the day timer
      const calculateTimeLeft = () => {
    const targetDate = new Date("2024-09-14T21:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
    const padZero = (num) => String(num).padStart(2, '0');

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: padZero(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: padZero(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: padZero(Math.floor((difference / 1000 / 60) % 60)),
        seconds: padZero(Math.floor((difference / 1000) % 60)),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Destructure timeLeft
  const { days, hours, minutes, seconds } = timeLeft;


  const [isImageHovered, setImageHovered] = useState(null);
  const cartAndHeartIcon = [cartIcon, heartIcon, combinedArrows];
  const handleMouseEntered = (index) => {
    setImageHovered(index);
  }
  const handleMouseLeave = () => {
    setImageHovered(null)
  }

  // products slider script
  // const itemsPerPage = 4;
  const slides = products.map((product, index) => (
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
  ))

  return (
    <div className='deal-of-the-day-main-container'>
        <fieldset className='deal-of-the-day-products-slider-main-container'>
            <legend className='deal-of-the-day-border-heading'>
                <h3>Deal of the Day</h3>
                <div className='deal-of-the-day-border-countdown'>
                   <p>
                        end in : {days}d : {hours}h : {minutes}m : {seconds}s
                    </p> 
                </div>
            </legend>
            {/* <div className='deal-of-the-day-cards-container'> */}
                {/* <DealOfTheDayCard />  */}
                <CustomSlider 
                  cards={slides}
                  visibleCards={1}
                  showArrows={false}
                  showDots={true}
                />
            {/* </div> */}
            {/* <DealOfTheDayCard /> */}
        </fieldset>
    </div>
  )
}

export default DealOfTheDay
