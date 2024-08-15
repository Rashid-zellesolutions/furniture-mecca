import React, { useState } from 'react'
import './InstaGallery.css';
import galleryimageOne from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 874.png';
import galleryImageTwo from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 875.png';
import galleryImageThree from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 876.png';
import galleryImageFour from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 877.png';
import galleryImageFive from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 878.png';
import galleryImageSix from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 879.png';
import galleryImageSeven from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 880.png';
import galleryImageEight from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 881.png';
import galleryImageNine from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 882.png';
import galleryImageTen from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 883.png';
import instaIcon from '../../../Assets/Furniture Mecca/Landing Page/instagram images/insta-icon.png'


const InstaGallery = () => {
    const instaGalleryImages = [
        galleryimageOne, galleryImageTwo, galleryImageThree, galleryImageFour, galleryImageFive, galleryImageSix, galleryImageSeven, galleryImageEight, galleryImageNine, galleryImageTen
    ]
    const [animateMouse, setAnimateMouse] = useState(false);
    const handleMouseMove = () => {
        setAnimateMouse(true)

        setTimeout(() => {
            setAnimateMouse(false);
        }, 1500)
    }
  return (
    <div className='insta-gallery-images' onMouseMove={handleMouseMove}>
        <div className='insta-gallery-row-one'>
            {instaGalleryImages.slice(0, 5).map((item, inex) => {
                return <img src={item} alt='img' />
            })}
        </div>
        <div className='insta-gallery-row-two'>
            {instaGalleryImages.slice(5, 10).map((item, inex) => {
                return <img src={item} alt='img' />
            })}
        </div>
        <img src={instaIcon} alt='icon' className={`insta-icon ${animateMouse ? 'animate' : ''}`} />
    </div>
  )
}

export default InstaGallery
