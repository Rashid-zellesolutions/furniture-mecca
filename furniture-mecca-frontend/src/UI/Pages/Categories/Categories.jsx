import React from 'react'
import './Categories.css';
import Haider from '../../../Global-Components/Header/Haider';
import Shopvia from '../../Components/ShopViaBanner/Shopvia';
import ShipBanner from '../../Components/ShipBanner/ShipBanner';
import Category from '../../Components/Category/Category';
import CustomerServicePanel from '../../Components/CustomerServicePanel/CustomerServicePanel';
import Footer from '../../../Global-Components/Footer/Footer';
import LatestModulerBanner from '../../Components/LatestModuler/LatestModulerBanner';
import NewArrival from '../../Components/NewArrivals/NewArrival';
import imageOne from '../../../Assets/global-images/tatun-pub.jpg';
import imageTwo from '../../../Assets/global-images/Enzo-bedrrom-set.webp'
import imageThree from '../../../Assets/global-images/Ian-bedroom-set.webp';
import MultiProductSlider from '../../Components/MultiProductSLider/MultiProductSlider';

const Categories = ({categoriesMainImage, categoryCardData, newArrival}) => {

  const sliderImages = [
    imageOne,
    imageTwo,
    imageThree,
    // Add more images as needed
  ];

  return (
    <div>
      <Haider />
      <Shopvia />
      <LatestModulerBanner customWidth={false} mainImage={categoriesMainImage} />
      <Category title={'Dining Room Furniture'} categoryData={categoryCardData} />
      <MultiProductSlider />
      {newArrival ? <NewArrival /> : <></>}
      <CustomerServicePanel />
      <Footer />
    </div>
  )
}

export default Categories
