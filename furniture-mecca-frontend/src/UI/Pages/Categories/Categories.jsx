import React from 'react'
import './Categories.css';
import Haider from '../../../Global-Components/Header/Haider';
import Shopvia from '../../Components/ShopViaBanner/Shopvia';
import ShipBanner from '../../Components/ShipBanner/ShipBanner';
import Category from '../../Components/Category/Category';
import CustomerServicePanel from '../../Components/CustomerServicePanel/CustomerServicePanel';
import Footer from '../../../Global-Components/Footer/Footer';
import LatestModulerBanner from '../../Components/LatestModuler/LatestModulerBanner';

// Paypal images
import payPalBannerOne from '../../../Assets/to-be-change/download 51.png'
import payPalBannerTwo from '../../../Assets/to-be-change/download 52.png'
import installmentBanner from '../../../Assets/to-be-change/New-Long-Financing-2048x160 1.png';

const Categories = () => {
  return (
    <div>
      <Haider />
      <Shopvia />
      <LatestModulerBanner customWidth={false} />
      <Category title={'Dining Room Furniture'} />
      <CustomerServicePanel />
      <Footer />
    </div>
  )
}

export default Categories
