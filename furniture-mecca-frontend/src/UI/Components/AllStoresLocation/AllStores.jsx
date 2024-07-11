import React, { useEffect, useState } from 'react'
import './AllStores.css';
import storeImage from '../../../Assets/images/06.png';
import arrowLeft from '../../../Assets/icons/arrow-left.png';
import arrowRight from '../../../Assets/icons/arrow-right.png';

const AllStores = () => {
    const [hovered, setHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0)
    const stores = [
        {img: storeImage, address: '101 E. Venango St, Philadelphia'},
        {img: storeImage, address: '1430 W Hunting Park Ave Philadelphia '},
        {img: storeImage, address: '501 S. 69th Street Upper Darby'},
        {img: storeImage, address: '130 E Baltimore Ave, Lansdowne PA'},
        {img: storeImage, address: '1830 Delmar Drive, Folcroft PA'},
        {img: storeImage, address: '1600 N Olden Ave. Ewing'},
        {img: storeImage, address: '408 Penn St Reading'},
        {img: storeImage, address: '5648 Lancaster Ave Philadelphia,'},
        {img: storeImage, address: '611 W Brookdale St, Allentown'},
    ]

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stores.length)
    }

    useEffect(() => {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval) 
    }, [])

  return (
    <div className='all-stores-main-container'>
      <div className='store-cards-container'>
            {stores.map((item, index) => {
                return <div className='stores-card'>
                    <div className='image-container'
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <img src={item.img} alt='img' />
                    </div>
                    <p>{item.address}</p>
                </div>
            })}
      </div>
      <div className='find-stores'>
        <div className={`find ${hovered ? 'hide' : ''}`}>
            <h3>Celebrate the FM's way</h3>
            <p>Enjoy everyday low prices, free coffee and treats, and never any phony sales.</p>
            <button>Find Your Store</button>
        </div>
        <div className={`stores-slider-container ${hovered ? 'show' : ''}`}>
            <div className='all-stores-slider' style={{transform: `translateX(-${currentIndex * 100}%)`}}>
              {stores.map((item, index) => {
                return <div className='slides' key={index}>
                  <img src={item.img} alt='store img' />
                  <p>{item.address}</p>
                </div>
              })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default AllStores
