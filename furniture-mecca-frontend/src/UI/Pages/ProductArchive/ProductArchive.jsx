import React from 'react';
import './ProductArchive.css';
import CustomerServicePanel from '../../Components/CustomerServicePanel/CustomerServicePanel';
import CategoriesGetScop from '../../Components/CategoriesGetScop/CategoriesGetScop';
import FAQ from '../../Components/FAQ/FAQ';
import Shopvia from '../../Components/ShopViaBanner/Shopvia';
import BreadCrumWithProduct from '../../Components/BreadCrumWithProduct/BreadCrumWithProduct';


const ProductArchive = () => {
  return (
    <div>
        <Shopvia />
        <BreadCrumWithProduct />
        <FAQ />
        <CategoriesGetScop isTrue={false} />
        <CustomerServicePanel />
    </div>
  )
}

export default ProductArchive
