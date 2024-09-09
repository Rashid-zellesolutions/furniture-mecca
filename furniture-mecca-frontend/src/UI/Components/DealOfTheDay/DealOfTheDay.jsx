import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import './DealOfTheDay.css';
import DealOfTheDayCard from './DealOfTheDayCard/DealOfTheDayCard';
import { useProducts } from '../../../context/productsContext/productContext';

const DealOfTheDay = () => {
    
    
    // Deal of the day timer
      const calculateTimeLeft = () => {
    const targetDate = new Date("2024-09-14T21:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
    const padZero = (num) => String(num).padStart(2, '0');

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: padZero(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: padZero(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: padZero(Math.floor((difference / 1000 / 60) % 60)),
        seconds: padZero(Math.floor((difference / 1000) % 60)),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Destructure timeLeft
  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className='deal-of-the-day-main-container'>
        <fieldset className='deal-of-the-day-products-slider-main-container'>
            <legend className='deal-of-the-day-border-heading'>
                <h3>Deal of the Day</h3>
                <div className='deal-of-the-day-border-countdown'>
                   <p>
                        end in : {days}d : {hours}h : {minutes}m : {seconds}s
                    </p> 
                </div>
            </legend>
            <DealOfTheDayCard />
        </fieldset>
    </div>
  )
}

export default DealOfTheDay
