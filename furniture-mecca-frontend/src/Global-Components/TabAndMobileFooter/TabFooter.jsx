import React from 'react'
import './TabFooter.css';
import redFurnitureMecca from '../../Assets/to-be-change/furniture-mecca-red.jpeg'
import filledStar from '../../Assets/icons/Star 3.png';
import unFilledStart from '../../Assets/icons/Star 5.png';
import locationIcon from '../../Assets/icons/location.png'
import callIcon from '../../Assets/icons/call.png'
import mailIcon from '../../Assets/icons/mail.png'

import facebookIcon  from '../../Assets/icons/facebook.png';
import tiktokIcon from '../../Assets/icons/tiktok.png';
import youtubeIcon from '../../Assets/icons/youtube.png';
import instaIcon from '../../Assets/icons/instagram.png';

const TabFooter = () => {
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
  return (
    <div className='mobile-view-footer-main-container'>
      <div className='footer-second-section'>
            <div className='mobile-view-footer-poster-div'>
                <img src={redFurnitureMecca} alt="img" />
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
