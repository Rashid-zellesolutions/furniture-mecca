import React from 'react'
import './SingleProduct.css'
import CustomerServicePanel from '../../Components/CustomerServicePanel/CustomerServicePanel'
import CategoriesGetScop from '../../Components/CategoriesGetScop/CategoriesGetScop'
import SingleProductStickySection from '../../Components/SingleProductStickySection/SingleProductStickySection'
import SimillerProducts from '../../Components/SimillerProducts/SimillerProducts'
import FrequentlyBought from '../../Components/FrequentlyBought/FrequentlyBought'

const SingleProduct = () => {
  return (
    <div>
        <SingleProductStickySection />
        <SimillerProducts />
        <FrequentlyBought />
        <CategoriesGetScop />
        <CustomerServicePanel />
    </div>
  )
}

export default SingleProduct

