import React from 'react'
import './Categories.css';
import Shopvia from '../../Components/ShopViaBanner/Shopvia';
import Category from '../../Components/Category/Category';
import CustomerServicePanel from '../../Components/CustomerServicePanel/CustomerServicePanel';
import LatestModulerBanner from '../../Components/LatestModuler/LatestModulerBanner';
import NewArrival from '../../Components/NewArrivals/NewArrival';
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
      <CategoriesGetScop isTrue={true} />
      <CustomerServicePanel />
    </div>
  )
}

export default Categories
