import React from 'react'
import './DealOfDay.css'
import { RiArrowDropRightLine } from "react-icons/ri";
import DealOfTheDayItem from '../DealOfTheDayItem/DealOfTheDayItem';

const DealOfDay = () => {
  return (
    <div className='deal-of-the-day-main-container'>
        <div className='deal-of-the-day-heading'>
            <h3>DEALS OF THE DAY</h3>
            <span><p>View all deals</p><RiArrowDropRightLine size={25} /></span>
        </div>
        <div className='deal-of-the-day-items'>
            <DealOfTheDayItem />
            <DealOfTheDayItem />
        </div>
    </div>
  )
}

export default DealOfDay
