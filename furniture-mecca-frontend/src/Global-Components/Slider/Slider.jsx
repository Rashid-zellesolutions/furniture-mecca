import React, { useEffect, useState } from 'react';
import './Slider.css';
import imageOne from '../../Assets/Furniture Mecca/Landing Page/Slider/Main Banner 1.jpg';
import imageTwo from '../../Assets/Furniture Mecca/Landing Page/Slider/Main Banner 2.jpg';
import imageThree from '../../Assets/slider-images/slider-image-3.png';
import smallSizeImageOne from '../../Assets/slider-images/sofa3.png'
import smallSizeImageTwo from '../../Assets/slider-images/sofa1.png'
import smallSizeImageThree from '../../Assets/slider-images/sofa2.png'
import ArrowLeft from '../../Assets/icons/arrow-left.png';
import ArrowRight from '../../Assets/icons/arrow-right.png';
import arrowLeftRed from '../../Assets/icons/arrow-left-red.png';
import arrowRightRed from '../../Assets/icons/arrow-right-red.png';
import { Link } from 'react-router-dom';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const slides = [
        { img: imageOne },
        { img: imageTwo },
        { img: imageOne },
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
            <div className='arrow left-arrow' onClick={prevSlide} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={isHovered ? arrowLeftRed : ArrowLeft} alt="arrow left" />
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
            <div className='arrow right-arrow' onClick={nextSlide} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={isHovered ? arrowRightRed : ArrowRight} alt="arrow right" />
            </div>
        </div>
    );
};

export default Slider;
