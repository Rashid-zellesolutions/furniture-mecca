import React from 'react';
import './ProductArchive.css';
import CustomerServicePanel from '../../Components/CustomerServicePanel/CustomerServicePanel';
import CategoriesGetScop from '../../Components/CategoriesGetScop/CategoriesGetScop';
import FAQ from '../../Components/FAQ/FAQ';
import Shopvia from '../../Components/ShopViaBanner/Shopvia';
import BreadCrumWithProduct from '../../Components/BreadCrumWithProduct/BreadCrumWithProduct';
import Products from '../../Components/Products/Products';
import imageOne from '../../../Assets/category/brown-soffa.png';
import imageTwo from '../../../Assets/category/white-soffa.png';
import imageThree from '../../../Assets/category/black-soffa.png'
import InstaGallery from '../../Components/InstaGallery/InstaGallery';

const ProductArchive = () => {
  // Breadcrup component data
  const breadcrumRecentData = [
    {img: imageOne, title: 'Under $1500'},
    {img: imageTwo, title: 'Sofa & Love Seat Sets'},
    {img: imageThree, title: 'Sectional Sets'},
    {img: imageOne, title: 'Under $1500'},
    {img: imageTwo, title: 'Sofa & Love Seat Sets'},
    {img: imageThree, title: 'Sectional Sets'},
]

  return (
    <div>
        <Shopvia />
        <BreadCrumWithProduct breadcrumRecentData={breadcrumRecentData}  />
        <Products />
        <FAQ />
        {/* <CategoriesGetScop isTrue={false} /> */}
        <InstaGallery />
        <CustomerServicePanel />
    </div>
  )
}

export default ProductArchive
