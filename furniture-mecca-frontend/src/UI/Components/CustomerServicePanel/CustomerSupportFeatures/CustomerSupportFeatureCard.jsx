import React, { useState } from 'react'
import './CustomerSupportFeatureCard.css';

import addBtnIcon from '../../../../Assets/icons/Group 437 (2).png';
import crossIcon from '../../../../Assets/icons/Mask group (1).png';


const CustomerSupportFeatureCard = ({img, heading, desc, isExtended, link, onToggle }) => {

  return (
        <div className={`customer-support-card ${isExtended ? 'expended' : ''}`}>
            <div className='customer-support-card-heading'>
                <img src={img} alt="cart" />
                <h3>{heading}</h3>
            </div>
            <div className='customer-support-card-description'>
                <h3>{heading}</h3>
                <a href={link}>{desc}</a>
            </div>
            <button onClick={onToggle}> <img src={isExtended ? crossIcon : addBtnIcon} alt="add" />  </button>
        </div>
  )
}

export default CustomerSupportFeatureCard
