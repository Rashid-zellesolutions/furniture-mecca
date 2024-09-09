import React, {useRef, useState} from 'react';
import './DealOfTheDayCard.css';
import testImage from '../../../../Assets/Furniture Mecca/product page/frequently bought/MN600__04-300x200 1.png'
import star from '../../../../Assets/icons/Star 19.png'
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
    const ITEMS_PER_PAGE = 4;

    const [currentPage, setCurrentPage] = useState(0);
    const sliderRef = useRef(null)

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextClick = () => {
    const maxPage = Math.ceil(products.length / ITEMS_PER_PAGE) - 1;
    setCurrentPage((prevPage) => Math.min(prevPage + 1, maxPage));
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  React.useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = currentPage * (sliderRef.current.scrollWidth / Math.ceil(products.length / ITEMS_PER_PAGE));
    }
  }, [currentPage]);
    
  return (
    <div className="deal-of-the-day-slider-container">
        <button className='deal-of-the-day-arrow deal-of-the-day-left ' onClick={handlePrevClick}>
            <img src={leftArrow} alt='left' />
        </button>
        <div className="deal-of-the-day-slider-wrapper"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {currentProducts.map((product) => (
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
                <div className='deal-of-the-day-product-image'>
                    <p className='deal-of-the-day-discount-tag'>-12%</p>
                    <img src={product.imageUrl} alt='img' />
                </div>
                <hr className='deal-of-the-day-line' />
                <div className='deal-of-the-day-stock-or-sold'>
                    <p>Available <span>{product.stock}</span></p>
                    <p>Sold <span>{product.sold}</span></p>
                </div>
            </div>
          ))}
          <button className='deal-of-the-day-arrow deal-of-the-day-right' onClick={handleNextClick}>
                <img src={rightArrow} alt='right' />
          </button>
      </div>
    </div>
  );
};

export default DealOfTheDayCard;
