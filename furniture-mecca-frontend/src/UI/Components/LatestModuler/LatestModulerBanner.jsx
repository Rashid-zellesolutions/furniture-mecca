import React, { useEffect, useState } from 'react'
import './LatestModulerBanner.css';
import SodaBannerOne from '../../../Assets/to-be-change/soda-1.png';
import SodaBannerTwo from '../../../Assets/to-be-change/soda-2.png';
import SodaMobileViewBanner from '../../../Assets/images/Rectangle 679.png'
import mobileViewBanner from '../../../Assets/to-be-change/mobile-viewimg.png'
import PaypalBannerOne from '../../../Assets/to-be-change/download 51.png';
import PaypalBannerTwo from '../../../Assets/to-be-change/download 52.png';
import MobileViewPaypalBanner from '../../../Assets/images/Group 382.png';
import PaymentMethodBanner from '../../Components/PaypalBanner/PaymentMethodBanner';
import installmentBanner from '../../../Assets/to-be-change/New-Long-Financing-2048x160 1.png';
import fullBed from '../../../Assets/to-be-change/hp-fourth_hero_mat_desktop_1b_3200x1388.png';
import mobileViewFullBed from '../../../Assets/images/Rectangle 703.png'

import diningImage from '../../../Assets/images/Dining-Room-Desk-1 1.png'

const LatestModulerBanner = ({images, customWidth}) => {
  
  return (
    <>
      <div className={`moduler-container ${customWidth ? 'show' : ''}`}>
        <div className='soda-banner'>
          <img src={SodaBannerOne} alt="soda banner" className={`soda-image`}/>
          <img src={SodaBannerTwo} alt="soda banner" className='soda-image' />
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
      <div className={`full-width-container ${customWidth ? 'hide' : ''}`}>
        <div className='dining-image-div'>
          <img src={diningImage} alt='dining image' />
        </div>
        <div className='dining-paypal-div'>
            <img src={PaypalBannerOne} alt='paypal one' />
            <img src={PaypalBannerTwo} alt='paypal two' />
        </div>
        <div className='dining-installment-div'>
            <img src={installmentBanner} alt='installment' />
        </div>
      </div>
    </>
  )
}

export default LatestModulerBanner
