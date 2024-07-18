import React, { useEffect, useState } from 'react'
import './TabFooter.css';
import redFurnitureMecca from '../../Assets/global-images/furniture-mecca-red.jpeg'
import filledStar from '../../Assets/icons/Star 3.png';
import unFilledStart from '../../Assets/icons/Star 5.png';
import locationIcon from '../../Assets/icons/location.png'
import callIcon from '../../Assets/icons/call.png'
import mailIcon from '../../Assets/icons/mail.png'

import facebookIcon  from '../../Assets/icons/facebook.png';
import tiktokIcon from '../../Assets/icons/tiktok.png';
import youtubeIcon from '../../Assets/icons/youtube.png';
import instaIcon from '../../Assets/icons/instagram.png';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import addBtn from '../../Assets/icons/add-icon.png';

const TabFooter = () => {

    const [isTrue, setIsTrue] = useState(false)
    const [openIndex, setOpenIndex] = useState(null)

    const footerLinksData = [
        {name: 'Resource & Tour', icon: addBtn, text: 'This is Text'},
        {name: 'Resource & Tour', icon: addBtn, text: 'This is Text'},
        {name: 'Resource & Tour', icon: addBtn, text: 'This is Text'},
    ]

    const stars = [
        {icon: filledStar},
        {icon: filledStar},
        {icon: filledStar},
        {icon: filledStar},
        {icon: unFilledStart}

    ]

    const socialIcons = [
        {socialIcon: facebookIcon},
        {socialIcon: tiktokIcon},
        {socialIcon: youtubeIcon},
        {socialIcon: instaIcon},
    ]

    const handleDetailsToggle = () => {
        setIsTrue(true)
        console.log('show')
    }
    const handleDetailCloseToggle = () => {
        setIsTrue(false)
        console.log('hide')
    }

    const handleContaintShow = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    }
  return (
    <div className='mobile-view-footer-main-container'>
        <div className='footer-first-section'>
            <div className={`first-section-show ${isTrue ? 'hide' : ''}`}>
                <div className='first-section-img'>
                    <h3>Nearest Store : </h3>
                    <img src={redFurnitureMecca} alt='img' />
                </div>
                <div className='footer-first-section-containt'>
                    <h3 >Manchester</h3>
                    <p className='hide-on-small'>(Opens At 10: 00 AM)</p>
                    <p className='hide-on-large'>Opens 10:00 AM</p>
                    <span onClick={handleDetailsToggle}><p>Details</p> <IoIosArrowDown size={20} /> </span>
                    
                </div>
            </div>    
            <div className={`details-container ${isTrue ? 'show' : ''}`}>
                        <img src={redFurnitureMecca} alt='red' />
                        <h3>Nearest Store: <span>Manchester</span></h3>
                        <p className='open-time'>(Opens at 10:00 AM)</p>
                        <p>428 Tolland Turnpike <br /> Manchester CT 06042</p>
                        <span>
                            <p>215 352 1600</p>
                            <p>mon-sat 10am - 8pm</p>
                            <p>sun 11am - 7pm</p>
                        </span>
                        <a href='#'>View Direction</a>
                        <a href='#'>Book Appointment</a>
                        <a href='#'>Virtual Tour</a>
                        <span onClick={handleDetailCloseToggle} className='close-togle'>
                            <p>Close</p><IoIosArrowUp size={30} />
                        </span>
                        
            </div>
            <div className='first-section-links-container'>
                {footerLinksData.map((item, index) => {
                    return <div key={index} className={`first-section-show-and-hide`}>
                        <div className='first-section-heading' onClick={() => handleContaintShow(index)}>
                            <h3>{item.name}</h3>
                            <img src={item.icon} alt='img' className={`add-and-close-btn ${openIndex === index ? 'rotate' : ''}`} />
                        </div>
                        <div className={`first-section-containt ${openIndex === index ? 'open-togle' : ''}`}>
                            <h3>{item.text}</h3>
                        </div>
                    </div>
                })}
            </div>
        </div>
        <div className='footer-second-section'>
            <div className='footer-rating-and-links'>
                <div className='mobile-view-footer-poster-div'>
                    <img src={redFurnitureMecca} alt="img" className='footer-banner-img' />
                    <div className='mobile-view-banner-containt'>
                        <h3>FURNITURE MECCA</h3>
                        <span className='rating-span'>
                            {stars.map((item, i) => {
                                return <img src={item.icon} alt="start" /> 
                            })}
                        </span>
                        <p>847 Google Reviews</p>
                    </div>
                </div>
                <div className={`footer-links`}>
                    <div className='footer-links-containt'>
                        <h3>Customer Care</h3>
                            <a href='#'>Contact Us</a>
                            <a href='#'>Financing</a>
                            <a href='#'>Shipping & Delivery</a>
                            <a href='#'>Terms & Conditions</a>
                    </div>
                    <div className='footer-links-containt'>
                        <h3>About Furniture Mecca</h3>
                            <a href='#'>About Us</a>
                            <a href='#'>Career</a>
                            <a href='#'>Store Locatons</a>
                            <a href='#'>Referance</a>
                            <a href='#'>My Account</a>
                    </div>
                </div>
            </div>
                <div className='mobile-view-footer-contact-section'>
                    <span> <img src={locationIcon} alt="location" /> <a href='#'>Philadelphia</a> </span>
                    <span> <img src={callIcon} alt="location" /> <a href='#'>215 352 1600</a> </span>
                    <span> <img src={mailIcon} alt="location" /> <a href='#'>meccacustomercare@gamil.com</a> </span>
                </div>
                <div className='mobile-view-footer-social-icons'>
                    {socialIcons.map((item, i) => {
                        return <img src={item.socialIcon} alt='social icon' />
                    })}
                </div>
                <div className='mobile-view-footer-copy-rights'>
                    <div className='mobile-view-term-and-shiping'>
                        <p> <a href='#'> Shiping & Delivey </a></p>
                        <p> <a href='#'>Terms & Conditions </a></p>
                    </div>
                    <p className='mobile-view-right-reserved'>Designed & maintained by <br /> <a href='#'> Zelle Solutions </a></p>
                </div>
        </div>
    </div>
  )
}

export default TabFooter
