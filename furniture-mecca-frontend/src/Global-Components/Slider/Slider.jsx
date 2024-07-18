import React, { useEffect, useState } from 'react';
import './Slider.css';
import imageOne from '../../Assets/slider-images/slider-image-1.png';
import imageTwo from '../../Assets/slider-images/slider-image-2.png';
import imageThree from '../../Assets/slider-images/slider-image-3.png';
import smallSizeImageOne from '../../Assets/slider-images/sofa3.png'
import smallSizeImageTwo from '../../Assets/slider-images/sofa1.png'
import smallSizeImageThree from '../../Assets/slider-images/sofa2.png'
import ArrowLeft from '../../Assets/icons/arrow-left.png';
import ArrowRight from '../../Assets/icons/arrow-right.png';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { img: imageOne },
        { img: imageTwo },
        { img: imageThree },
    ];
    const infiniteSlides = [...slides, ...slides];

    const mobileViewSLider = [
        {img: smallSizeImageOne},
        {img: smallSizeImageTwo},
        {img: smallSizeImageThree}
    ]

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='slider'>
            <div className='arrow left-arrow' onClick={prevSlide}>
                <img src={ArrowLeft} alt="arrow left" />
            </div>
            <div className='slides-container' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {infiniteSlides.map((slide, index) => (
                    <div className='slide' key={index}>
                        <img src={slide.img} alt={`slide ${index + 1}`} />
                    </div>
                ))}
                {mobileViewSLider.map((mobileSlide, index) => (
                    <div className='mobile-slide'>
                        <img src={mobileSlide.img} alt={`slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className='arrow right-arrow' onClick={nextSlide}>
                <img src={ArrowRight} alt="arrow right" />
            </div>
        </div>
    );
};

export default Slider;
