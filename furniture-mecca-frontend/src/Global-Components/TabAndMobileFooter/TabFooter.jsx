import React, { useEffect, useState } from 'react'
import './TabFooter.css';
import redFurnitureMecca from '../../Assets/global-images/furniture-mecca-red.jpeg'
import nearStore from '../../Assets/all-stores-location-images/venango-store.jpg'
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

    const customerCare = [
        {item: 'Contact Us', link: '#'},
        {item: 'Financing', link: '#'},
        {item: 'Shipping & Delivery', link: '#'},
        {item: 'Terms & Conditions', link: '#'},
    ]

    const aboutUs = [
        {item: 'About Us', link: '#'},
        {item: 'Careers', link: '#'},
        {item: 'Store Locator', link: '#'},
        {item: 'Reviews', link: '#'},
        {item: 'My Account', link: '#'},
    ]

    const socialIcons = [
        {socialIcon: facebookIcon, socialLink: '#'},
        {socialIcon: tiktokIcon, socialLink: '#'},
        {socialIcon: youtubeIcon, socialLink: '#'},
        {socialIcon: instaIcon, socialLink: '#'},
    ]

    const contactData = [
        {icon: locationIcon, title: 'Philadelphia', link: '#'},
        {icon: callIcon, title: '215 352 1600', link: '#'},
        {icon: mailIcon, title: 'meccacustomercare@gmail.com', link: '#'}
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
            <div className='footer-banner-and-links'>
                <div className='social-icon-and-banner'>
                    <div className='footer-social-icons'>
                        {socialIcons.map((item, index) => {
                            return <a key={index} href={item.socialLink}>
                                <img src={item.socialIcon} alt="icon" />
                            </a>
                        })}
                    </div>
                    <div className='footer-banner'>
                        <img src={redFurnitureMecca} alt='img' className='company-name-image' />
                        <div className='banner-content'>
                            <h3>Furniture Mecca</h3>
                            <div className='rating-starts-container'>
                                {stars.map((item, index) => {
                                    return <img src={item.icon} alt='start' />
                                })}
                            </div>
                            <p>847 Google Reviews</p>
                        </div>
                    </div>
                    <div className='contact-container'>
                        {contactData.map((item, index) => {
                            return <span key={index}>
                                <img src={item.icon} alt='img' />
                                <a href={item.link}>{item.title}</a>
                            </span>
                        })}
                    </div>
                </div>
                <div className='footer-about-and-contact-links'>
                    <div className='footer-nearby-store'>
                        <h3>Nearest Store</h3>
                        <div className='nearby-store-image'>
                            <p>101 E. Venango st, Philadelphi</p>
                            <img src={nearStore} alt='img' />
                        </div>
                    </div>
                    <div className='footer-customer-care'>
                        <h3>Customer Care</h3>
                        <div className='customer-care-links'>
                            {customerCare.map((item, index) => {
                                return <a key={index} href={item.link}>{item.item}</a>
                            })}
                        </div>
                    </div>
                    <div className='footer-customer-care'>
                        <h3>About Furniture Mecca</h3>
                        <div className='customer-care-links'>
                            {aboutUs.map((item, index) => {
                                return <a key={index} href={item.link}>{item.item}</a>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='terms-and-rights'>
                <p>
                © 2020 - 2024 Furniture Mecca. All Rights Reserved.
                </p>
                <p> Designed & Managed By <a href='#'>Zelle Solutions</a></p>
            </div>
            <div className='mobile-view-terms-and-rights'>
                <div className='ship-and-terms'>
                    <p>Shipping & Delivery</p>
                    <p>Terms & Condition</p>
                </div>
                <p>Designed & maintained by</p>
                <a href='#'>Zelle Solutions</a>
            </div>

            {/* <div className='footer-rating-and-links'>

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
                    <div className='footer-nearby-store'>
                        <h3>Nearest Store</h3>
                        <div className='nearby-store-image'>
                            <p>101 E. Venango st, Philadelphi</p>
                            <img src={nearStore} alt='img' />
                        </div>
                    </div>
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
            </div> */}

                {/* <div className='mobile-view-footer-contact-section'>
                    <span> <img src={locationIcon} alt="location" /> <a href='#'>Philadelphia</a> </span>
                    <span> <img src={callIcon} alt="location" /> <a href='#'>215 352 1600</a> </span>
                    <span> <img src={mailIcon} alt="location" /> <a href='#'>meccacustomercare@gamil.com</a> </span>
                </div> */}

                {/* <div className='mobile-view-footer-social-icons'>
                    {socialIcons.map((item, i) => {
                        return <img src={item.socialIcon} alt='social icon' />
                    })}
                </div> */}

                {/* <div className='mobile-view-footer-copy-rights'>
                    <div className='mobile-view-term-and-shiping'>
                        <p> <a href='#'> Shiping & Delivey </a></p>
                        <p> <a href='#'>Terms & Conditions </a></p>
                    </div>
                    <p className='mobile-view-right-reserved'>Designed & maintained by <br /> <a href='#'> Zelle Solutions </a></p>
                </div> */}
        </div>
    </div>
  )
}

export default TabFooter
