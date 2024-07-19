import React, {useState, useRef} from 'react'
import './ProductSlider.css';
import ProductCard from './ProductCard/ProductCard';

const ProductSlider = ({cardData}) => {  
    return (
      <div className="products-slider-main-container">
        <h3 className='feature-product-heading'>Featured Products</h3>
        <div className='products-slider'>
        {cardData.map((item, index) => {
            return <ProductCard key={index} 
                      img={item.img} 
                      heading={item.heading} 
                      para={item.para} 
                      btnTxt={item.btnText} 
                      productImageHeading={item.productImageHeading}
                      productImagePrice={item.productImagePrice}
                      productImageAbout={item.productImageAbout}
                      productLink={item.productLink}
                    />
        })}
        </div>
      </div>
    );
  };
  
  export default ProductSlider;
  
