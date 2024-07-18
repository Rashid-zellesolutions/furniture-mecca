import React, { useEffect, useState } from 'react'
import './MultiProductSlider.css'
import tentSaleBanner from '../../../Assets/global-images/tent-sale-banner.png';
import diningRoomGolden from '../../../Assets/global-images/Dining-Room-Set-in-Gold.png';
import blackChairsSet from '../../../Assets/global-images/download 83.png';
import kanoSet from '../../../Assets/global-images/Kano-300x200-1 1.png';
import pubSet from '../../../Assets/global-images/Stone-Pub-Dining-Set.png';

const MultiProductSlider = () => {

    const sliderOne = [
        {img: diningRoomGolden},
        {img: blackChairsSet},
        {img: kanoSet},
        {img: pubSet},
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % sliderOne.length);
        }, 3000);
        return () => clearInterval(interval)
    }, [sliderOne.length]); 

    

  return (
    <div className='multi-product-sliders-man'>
      <div className='products-banner'>
        <img src={tentSaleBanner} alt='tent' />
      </div>
      <div className='product-sliders-container'>
            <div className='slider-one' style={{transform: `translateY(-${currentIndex * 250}px)`}}>
                {sliderOne.map((item, index) => (
                    <div key={index} className='my-slides'>
                        <img src={item.img} alt='img' />
                    </div>
                ))}
            </div>

            <div className='slider-one'>
                {sliderOne.map((item, index) => (
                    <div key={index} className='my-slides'>
                        <img src={item.img} alt='img' />
                    </div>
                ))}
            </div>

            <div className='slider-one'>
                {sliderOne.map((item, index) => (
                    <div key={index} className='my-slides'>
                        <img src={item.img} alt='img' />
                    </div>
                ))}
            </div>

            <div className='slider-one'>
                {sliderOne.map((item, index) => (
                    <div key={index} className='my-slides'>
                        <img src={item.img} alt='img' />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MultiProductSlider
