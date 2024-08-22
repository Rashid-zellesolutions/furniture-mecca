import React, { useState } from 'react';
import './BlogSlider.css';
import arrowLeft from '../../../Assets/icons/arrow-left.png';
import arrowRight from '../../../Assets/icons/arrow-right.png';
import arrowLeftRed from '../../../Assets/icons/arrow-left-red.png';
import arreowRightRed from '../../../Assets/icons/arrow-right-red.png';
import blogOneImg from '../../../Assets/Furniture Mecca/Landing Page/blogs/Perks-Of-Using-High-Quality-Mattresses-For-Sleeping 1.png'
import blogTwoImage from '../../../Assets/Furniture Mecca/Landing Page/blogs/Some-Basics-On-Keeping-Your-Living-Room-Furniture-Clean 1.png';
import blogTheeImage from '../../../Assets/Furniture Mecca/Landing Page/blogs/Some-Basics-on-cleaning-Leather-Furniture 1.png';
import { CgMenuLeftAlt } from "react-icons/cg";

const BlogSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const blogSliderData = [
        {img: blogOneImg, categoryIcon: <CgMenuLeftAlt size={15} />, category: 'Uncategorized 0', date: '20-08-2024', para: 'Five Things To Consider When Choosing Furniture For A Small Living Room', link: '#'},
        {img: blogTwoImage, categoryIcon: <CgMenuLeftAlt size={15} />, category: 'Uncategorized 1', date: '21-02-2024', para: 'Your Furniture Show You As You Are', link: '#'},
        {img: blogTheeImage, categoryIcon: <CgMenuLeftAlt size={15} />, category: 'Uncategorized 2', date: '01-05-2024', para: 'Add That "Wow Factor" To Your Home  - Tips And Tricks', link: '#'},
        {img: blogOneImg, categoryIcon: <CgMenuLeftAlt size={15} />, category: 'Uncategorized 3', date: '12-07-2024', para: "Package Of All Living Room's Furniture For A Coordinated Look", link: '#'},
    ];

    // Duplicate the blogSliderData array to create an infinite loop effect
    const infiniteSliderData = [...blogSliderData, ...blogSliderData];

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % blogSliderData.length);
    }
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + blogSliderData.length) % blogSliderData.length)
    }


    const truncateTextByWords = (text, wordLimit) => {
        if (typeof text !== 'string' || wordLimit <= 0) {
            return '';
        }
    
        const words = text.split(' ');
    
        if (words.length <= wordLimit) {
            return text;
        }
    
        return words.slice(0, wordLimit).join(' ') + '...';
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
            <button className='blog-slider-arrow left' onClick={handlePrev} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src={isHovered ? arrowLeftRed : arrowLeft} alt='left' />
                </button>
                <div className='blog-slider' style={{transform: `translateX(-${currentIndex * 37}%)`}} >
                    {infiniteSliderData.map((item, index) => (
                        <div className='blog-card'>
                            <a href={item.link} className='blog-card-img' key={index}>
                                <img src={item.img} alt='blog img' />
                            </a>
                            <div className='blog-para-and-category'>
                                <p>{truncateTextByWords(item.para, 6)}</p>
                                <div className='category-and-date'>
                                    <span> {item.categoryIcon} {item.category}  </span>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className='blog-slider-arrow right' onClick={handleNext} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src={isHovered ? arreowRightRed : arrowRight} alt='right' />
                </button>
            </div>
            <div className='see-all-blog-button-container'>
                <button>See All Blogs</button>
            </div>
        </div>
    );
}

export default BlogSlider;
