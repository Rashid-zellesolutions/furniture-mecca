import React, { useState } from 'react';
import './BlogSlider.css';
import arrowLeft from '../../../Assets/icons/arrow-left.png';
import arrowRight from '../../../Assets/icons/arrow-right.png';
import blogOneImg from '../../../Assets/blogs-images/blog-one.webp'
import blogTwoImage from '../../../Assets/blogs-images/blog-two.webp';
import blogTheeImage from '../../../Assets/blogs-images/blog-three.webp';

const BlogSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const blogSliderData = [
        {img: blogOneImg, category: 'Uncategorized 0', para: 'Five Things To Consider When Choosing Furniture For A Small Living Room', link: '#'},
        {img: blogTwoImage, category: 'Uncategorized 1', para: 'Your Furniture Show You As You Are', link: '#'},
        {img: blogTheeImage, category: 'Uncategorized 2', para: 'Add That "Wow Factor" To Your Home  - Tips And Tricks', link: '#'},
        {img: blogOneImg, category: 'Uncategorized 3', para: "Package Of All Living Room's Furniture For A Coordinated Look", link: '#'},
    ];

    // Duplicate the blogSliderData array to create an infinite loop effect
    const infiniteSliderData = [...blogSliderData, ...blogSliderData];

    const handleMouseEnter = () => {
        document.querySelector('.blog-slider').classList.add('paused');
    }
    const handleMouseLeave = () => {
        document.querySelector('.blog-slider').classList.remove('paused');
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % blogSliderData.length);
    }
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + blogSliderData.length) % blogSliderData.length)
    }

    return (
        <div className='blog-main-container'>
            <div className='blog-heading-and-para'>
                <h3>Exciting Blogs Created by <span> Furniture Mecca Outlet </span></h3>
                <p>
                    Captivating narratives by The Furniture Mecca, where each blog tells a 
                    unique tale of style, comfort, and functionality. Discover the enchanting 
                    stories behind every furnishing at The Furniture Mecca, turning your home 
                    into a haven filled with both charm and character.
                </p>
            </div>
            <div className='blog-slider-container'>
            <button className='blog-slider-arrow left' onClick={handlePrev}>
                    <img src={arrowLeft} alt='left' />
                </button>
                <div className='blog-slider' style={{transform: `translateX(-${currentIndex * 37}%)`}}
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                    {infiniteSliderData.map((item, index) => (
                        <a href={item.link} className='blog-card' key={index}>
                            <img src={item.img} alt='blog img' />
                            <div className='blog-para-and-category'>
                                <p>{item.para}</p>
                                <span>{item.category}</span>
                            </div>
                        </a>
                    ))}
                </div>
                <button className='blog-slider-arrow right' onClick={handleNext}>
                    <img src={arrowRight} alt='right' />
                </button>
            </div>
            <div className='see-all-blog-button-container'>
                <button>See All Blogs</button>
            </div>
        </div>
    );
}

export default BlogSlider;
