import React, { useEffect, useState } from 'react'
import Category from '../../Components/Category/Category';
import Haider from '../../../Global-Components/Header/Haider';
import ShipBanner from '../../Components/ShipBanner/ShipBanner';
import LatestModulerBanner from '../../Components/LatestModuler/LatestModulerBanner';
import ProductSlider from '../../Components/ProductSlider/ProductSlider';
import ImageHeading from '../../Components/ImageHeading/ImageHeading';

import tuxedoChair from '../../../Assets/to-be-change/Rectangle 691.png'
import vikingImage from '../../../Assets/to-be-change/viking.jpg'
import journeyImage from '../../../Assets/to-be-change/journey.jpg'

// images for heading
import HeroImage from '../../../Assets/to-be-change/hp-fourth_hero_mat_desktop_1b_3200x1388.png';
import mobileViewImage from '../../../Assets/to-be-change/mobile-viewimg.png'
import HelpCenterBanner from '../../Components/HelpCenterBAnner/HelpCenterBanner';

import InspirationImage from '../../../Assets/to-be-change/Inspiration-HP-1 2.png'
import GetTheScop from '../../Components/GetTheScop/GetTheScop';
import CustomerServicePanel from '../../Components/CustomerServicePanel/CustomerServicePanel';
import Footer from '../../../Global-Components/Footer/Footer';
import FurnitureProduct from '../../Components/FurnitureProducts/FurnitureProduct';
import Slider from '../../../Global-Components/Slider/Slider';
import Shopvia from '../../Components/ShopViaBanner/Shopvia';



const Home = () => {
  // const [winWidth, setWinWidth] = useState(window.innerWidth)

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWinWidth(winWidth.innerWidth)
  //   }

  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])
  const productCardData = [
    {   heading: 'Tuxedo', productImageHeading: 'tuxedo Power Reclining Sofa', 
        productImagePrice: '$999', productImageAbout: "Bob's everyday low price", 
        btnText: 'Shop Tuxedo', img : tuxedoChair, 
        para: `With smooth, comfy seating, built-in charging ports AND cupholders, 
        my Tuxedo collection is dressed to impress!`
    },
    {   heading: 'Viking', btnText: 'Shop Viking', productImageHeading: 'Viking Power Reclining Sofa', 
        productImagePrice: '$999', productImageAbout: "Bob's everyday low price", img : vikingImage, 
        para: `On-trend and feature-packed with storage, charging ports, 
        and a reading light? There’s no better place to relax than Viking!`
    },
    {  heading: 'Journey', btnText: 'Shop Journey', productImageHeading: 'Journey Power Reclining Sofa', 
      productImagePrice: '$999', productImageAbout: "Bob's everyday low price", img : journeyImage, 
        para: `Customize your journey to comfort town with this collection’s adjustable 
        headrest, zero-gravity recline, and charging ports!`
    }
]
  return (
    <div className='home-page-main-container'>
      <Haider />
      <Shopvia />
      <Slider />
      <ShipBanner />
      <Category />
      <LatestModulerBanner />
      <FurnitureProduct />
      <ImageHeading img={HeroImage} alt={'bed image'} />
      <ProductSlider cardData={productCardData} />
      <ImageHeading img={HeroImage} alt={'bed image'} />
      <ProductSlider cardData={productCardData} />
      <ImageHeading img={HeroImage} alt={'hero'} />
      <ProductSlider cardData={productCardData} />
      <ImageHeading img={HeroImage} alt={'heor'} />
      <ProductSlider cardData={productCardData} />
      <ImageHeading img={HeroImage} alt={'hero'} />
      <HelpCenterBanner />
      <ImageHeading img={InspirationImage} alt={'inspiration'}/>
      <GetTheScop />
      <CustomerServicePanel />
      <Footer />
    </div>
  )
}

export default Home
