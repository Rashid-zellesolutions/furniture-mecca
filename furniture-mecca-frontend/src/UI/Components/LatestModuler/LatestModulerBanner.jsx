import React, { useEffect, useState } from 'react'
import './LatestModulerBanner.css';
import SodaBanner from '../../../Assets/to-be-change/soda 1.png';
import SodaMobileViewBanner from '../../../Assets/images/Rectangle 679.png'
import mobileViewBanner from '../../../Assets/to-be-change/mobile-viewimg.png'
import PaypalBannerOne from '../../../Assets/to-be-change/download 51.png';
import PaypalBannerTwo from '../../../Assets/to-be-change/download 52.png';
import MobileViewPaypalBanner from '../../../Assets/images/Group 382.png';
import PaymentMethodBanner from '../../Components/PaypalBanner/PaymentMethodBanner';
import installmentBanner from '../../../Assets/to-be-change/New-Long-Financing-2048x160 1.png';
import fullBed from '../../../Assets/to-be-change/hp-fourth_hero_mat_desktop_1b_3200x1388.png';
import mobileViewFullBed from '../../../Assets/images/Rectangle 703.png'

const LatestModulerBanner = () => {
  
  return (
    <div className='moduler-container'>
      <div className='soda-banner'>
        <img src={SodaBanner} alt="soda banner" className='soda-image' />
        <img src={SodaMobileViewBanner} alt="mobile soda" className='mobile-soda-banner' />
      </div>
      <div className='financing-banner'>
        <img src={PaypalBannerOne} alt="paypal banner" />
        <img src={PaypalBannerTwo} alt="paypal banner two" />
      </div>
      <div className='mobile-view-financing-banner'>
        <img src={MobileViewPaypalBanner} alt="paypal" />
      </div>
      <div className='installment-banner'>
      <img src={installmentBanner} alt="instalment-plan banner" />
      </div>
      <div className='bed-banner'>
        <img src={fullBed} alt="full size bed banner" />
      </div>
      <div className='mobile-view-bed-banner'>
        <img src={mobileViewFullBed} alt="full bed" />
      </div>
    </div>
  )
}

export default LatestModulerBanner
