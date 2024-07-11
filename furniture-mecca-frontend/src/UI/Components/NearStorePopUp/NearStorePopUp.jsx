import React, { useState } from 'react'
import './NearStorePopUp.css';
import closePopUpIcon from '../../../Assets/icons/cancel.png';
import NearStore from '../../../Assets/icons/home.png';
import { IoCloseOutline } from "react-icons/io5";
import searchIcon from '../../../Assets/icons/search.png';
import { TbCurrentLocation } from "react-icons/tb";
import AddBtn from '../../../Assets/icons/add-icon.png';
import { MdOutlineStars } from "react-icons/md";

const NearStorePopUp = ({isOpen, setIsOpen}) => {
    // const [issideOpen, setIsSideOpen] = useState(isOpen)
    const [storeOpen, setStoreOpen] = useState(false)
    const handleStoreHoursDetails = () => {}
  return (
    <div className={`near-store-pop-up ${isOpen ? 'show' : ''}`}>
        <div className='near-store-container'>
            <div className='pop-up-header'>
                <span onClick={() => setIsOpen(!isOpen)}> <IoCloseOutline size={20} /> </span>
                <i>
                    <img src={NearStore} alt='near' />
                </i>
                <h3>Find a Mecca</h3>
                <div className='pop-up-header-search'>
                    <input type='search' placeholder='Search by Zip Code or City & State' />
                    <img src={searchIcon} alt='search' />
                </div>
                <div className='pop-up-header-location'>
                    <p>
                        <TbCurrentLocation size={16} />
                        <a href='#'>Use Currunt Location</a>
                    </p>
                    <p>
                        <a href='#'>Use My Delivery Zip</a>
                    </p>
                </div>
            </div>
            <div className='pop-up-single-city-card'>
                <div className='pop-up-single-city-cart'>
                    <img src={NearStore} alt='near' />
                    <h3>Your Store</h3>
                </div>
                <div className='pop-up-city-and-distance'>
                    <span>
                        <img src={AddBtn} alt='add' onClick={handleStoreHoursDetails} />
                        <h3>Manchester</h3>
                    </span>
                    <p>0.8 Miles</p>
                </div>
                <div className='pop-up-store-open-time'>
                    <p>(Open until 8: 00 PM)</p>
                    <span>
                        <MdOutlineStars size={20} />
                    </span>
                </div>
                <div className='pop-up-complete-address'>
                    <p>428 Tolland Turnpike,</p>
                    <p>Manchester, CT, 06042</p>
                    <p><span>Call</span> (860) 645-3208</p>
                    <a href='#'>Outlet</a>
                    <a href='#'>Directions</a> 
                </div>
                <div className={`pop-up-store-open-days-and-time ${storeOpen ? 'open-store' : ''}`}>
                    <a href='#'>Book appointment</a>
                    <div className='store-hours-detail'>
                        <p>Store Hours</p>
                        <div className='store-hours'>
                            <p> <span>Sunday</span> <span>11:00 AM - 7:00 PM</span> </p>
                            <p> <span>Monday</span> <span>10:00 AM - 8:00 PM</span> </p>
                            <p> <span>Tuesday</span> <span>10:00 AM - 8:00 PM</span> </p>
                            <p> <span>Wednesday</span> <span>10:00 AM - 8:00 PM</span> </p>
                            <p> <span>Thursday</span> <span>10:00 AM - 8:00 PM</span> </p>
                            <p> <span>Friday</span> <span>10:00 AM - 8:00 PM</span> </p>
                            <p> <span>Saturday</span> <span>10:00 AM - 8:00 PM</span> </p>
                        </div>
                        <a href='#'>Virtual Tour</a>
                        <a href='#'>Store Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NearStorePopUp

{/* <button onClick={() => setIsOpen(!isOpen)}>close</button> */}