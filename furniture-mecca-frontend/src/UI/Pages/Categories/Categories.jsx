import React from 'react'
import './Categories.css';
import Shopvia from '../../Components/ShopViaBanner/Shopvia';
import Category from '../../Components/Category/Category';
import CustomerServicePanel from '../../Components/CustomerServicePanel/CustomerServicePanel';
import LatestModulerBanner from '../../Components/LatestModuler/LatestModulerBanner';
import NewArrival from '../../Components/NewArrivals/NewArrival';
import imageOne from '../../../Assets/global-images/tatun-pub.jpg';
import imageTwo from '../../../Assets/global-images/Enzo-bedrrom-set.webp'
import imageThree from '../../../Assets/global-images/Ian-bedroom-set.webp';
import MultiProductSlider from '../../Components/MultiProductSLider/MultiProductSlider';
import CategoriesGetScop from '../../Components/CategoriesGetScop/CategoriesGetScop';

const Categories = ({categoriesMainImage, categoryCardData, newArrival}) => {

  return (
    <div>
      <Shopvia />
      <LatestModulerBanner customWidth={false} mainImage={categoriesMainImage} />
      <Category title={'Dining Room Furniture'} categoryData={categoryCardData} />
      <MultiProductSlider />
      {newArrival ? <NewArrival /> : <></>}
      <CategoriesGetScop />
      <CustomerServicePanel />
    </div>
  )
}

export default Categories
