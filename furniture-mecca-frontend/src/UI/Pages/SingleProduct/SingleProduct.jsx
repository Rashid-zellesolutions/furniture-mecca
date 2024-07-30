import React from 'react'
import './SingleProduct.css'
import CustomerServicePanel from '../../Components/CustomerServicePanel/CustomerServicePanel'
import CategoriesGetScop from '../../Components/CategoriesGetScop/CategoriesGetScop'
import SingleProductStickySection from '../../Components/SingleProductStickySection/SingleProductStickySection'
import SimillerProducts from '../../Components/SimillerProducts/SimillerProducts'
import FrequentlyBought from '../../Components/FrequentlyBought/FrequentlyBought'
import RatingAndReview from '../../Components/RatingAndReview/RatingAndReview'
import CustomerPhotos from '../../Components/CustomerPhotos/CustomerPhotos'
import ProductComments from '../../Components/ProductComments/ProductComments'
import ShippingReturn from '../../Components/ShippingReturn/ShippingReturn'
import MoreToExplore from '../../Components/MoreToExplore/MoreToExplore'
import OutdoorFaves from '../../Components/OutdoorFaves/OutdoorFaves'
import ShipBanner from '../../Components/ShipBanner/ShipBanner'
import attentionBanner from '../../../Assets/images/attention-banner.png'

const SingleProduct = () => {
  return (
    <div>
        <SingleProductStickySection />
        <SimillerProducts />
        <FrequentlyBought />
        <RatingAndReview />
        <CustomerPhotos />
        <ProductComments />
        <ShippingReturn />
        <MoreToExplore />
        <OutdoorFaves />
        <ShipBanner bannerImg={attentionBanner} paddindTrue={true} />
        <CategoriesGetScop />
        <CustomerServicePanel />
    </div>
  )
}

export default SingleProduct

