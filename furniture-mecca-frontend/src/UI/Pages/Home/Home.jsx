import React, { useEffect, useState } from 'react'
import Category from '../../Components/Category/Category';
import ShipBanner from '../../Components/ShipBanner/ShipBanner';
import LatestModulerBanner from '../../Components/LatestModuler/LatestModulerBanner';
import ProductSlider from '../../Components/ProductSlider/ProductSlider';
import ImageHeading from '../../Components/ImageHeading/ImageHeading';


import tuxedoChair from '../../../Assets/to-be-change/Rectangle 691.png'
import vikingImage from '../../../Assets/to-be-change/viking.jpg'
import journeyImage from '../../../Assets/to-be-change/journey.jpg'

// images for heading
import HeroImage from '../../../Assets/to-be-change/hp-fourth_hero_mat_desktop_1b_3200x1388.png';
import GetTheScop from '../../Components/GetTheScop/GetTheScop';
import CustomerServicePanel from '../../Components/CustomerServicePanel/CustomerServicePanel';
import FurnitureProduct from '../../Components/FurnitureProducts/FurnitureProduct';
import Slider from '../../../Global-Components/Slider/Slider';
import Shopvia from '../../Components/ShopViaBanner/Shopvia';
import AllStores from '../../Components/AllStoresLocation/AllStores';
import BlogSlider from '../../Components/BlogSlider/BlogSlider';
import NearStorePopUp from '../../Components/NearStorePopUp/NearStorePopUp';

// Category Images

import newArrivalImage from '../../../Assets/category/new-arrival.png';
import livingRoomImage from '../../../Assets/category/living-room.png';
import diningImage from '../../../Assets/category/dining.png';
import bedroomImage from '../../../Assets/category/badroom.png';
import outDoorImage from '../../../Assets/category/out-door.png';
import recliningImage from '../../../Assets/category/reclining.png';
import SectionaSofa from '../../../Assets/to-be-change/sectional-sofa.png';
import Mattresses from '../../../Assets/to-be-change/mattresses.png';
import HomeOffice from '../../../Assets/to-be-change/home-office.png';
import KidsRoom from '../../../Assets/to-be-change/kids-room.png';
import AreaRugs from '../../../Assets/to-be-change/area-rugs.png';
import HomeDecor from '../../../Assets/to-be-change/home-decor.png';
import Outlet from '../../../Assets/to-be-change/outlet.png';


const Home = () => {
  
  
  const productCardData = [
    {   heading: 'Tuxedo', productImageHeading: 'tuxedo Power Reclining Sofa', 
        productImagePrice: '$999', productImageAbout: "Bob's everyday low price", 
        btnText: 'Shop Tuxedo', img : tuxedoChair, productLink: '#',
        para: `With smooth, comfy seating, built-in charging ports AND cupholders, 
        my Tuxedo collection is dressed to impress! the viking`
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

const categoryCardData = [
  {title: "New Arrival", img: newArrivalImage, link: '#'},
  {title: "Living Room", img: livingRoomImage, link: '#'},
  {title: "Dining", img: diningImage, link: '#'},
  {title: "Bedroom", img: bedroomImage, link: '#'},
  {title: "Outdoor", img: outDoorImage, link: '#'},
  {title: "Reclining Furniture", img: recliningImage, link: '#'},
  {title: "Sectional Sofas", img: SectionaSofa, link: '#'},
  {title: "Mattresses", img: Mattresses, link: '#'},
  {title: "Home Office", img: HomeOffice, link: '#'},
  {title: "Kids Room", img: KidsRoom, link: '#'},
  {title: "Area Rugs", img: AreaRugs, link: '#'},
  {title: "Home Decor", img: HomeDecor, link: '#'},
  {title: "Outlet", img: Outlet, link: '#'},
]

 


  return (
    <div className='home-page-main-container'>
      <NearStorePopUp />
      <Shopvia />
      <Slider />
      <ShipBanner />
      <Category title={'Shop by Category'} categoryData={categoryCardData} />
      <LatestModulerBanner customWidth={true} />
      <FurnitureProduct />
      <ImageHeading img={HeroImage} alt={'bed image'} />
      <ProductSlider cardData={productCardData} />
      {/* <ImageHeading img={HeroImage} alt={'bed image'} /> */}
      <GetTheScop />
      <BlogSlider />
      <CustomerServicePanel />
      <AllStores />
    </div>
  )
}

export default Home
