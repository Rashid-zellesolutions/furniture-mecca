import React, {useState, useEffect} from 'react'
import './Haider.css';
import logo from '../../Assets/Logo/m_logo_360 2.png'
import searchIcon from '../../Assets/icons/search.png';
import NearStoreIcon from '../../Assets/icons/home.png';
import HeartIcon from '../../Assets/icons/like.png';
import cartIcon from '../../Assets/icons/cart2.png';
import profileIcon from '../../Assets/icons/profile.png'
import deliverTo from '../../Assets/icons/delivery.png'
import locationIcon from '../../Assets/icons/location-red.png';
import navToggler from '../../Assets/icons/Union.png'
import searchRed from '../../Assets/icons/search-red.png'
import Nav from '../Navbar/Nav';
import MobileMenu from '../Navbar/MobileMenu/MobileMenu';
import TabMenu from '../Navbar/TabMenu/TabMenu';
import NearStorePopUp from '../../UI/Components/NearStorePopUp/NearStorePopUp';
import { MdOutlineStars } from "react-icons/md";

const Haider = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isTabMenuOpen, setIsTabMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
    const dynamicHeading = [0, 1, 2]
    useEffect(() => {
        const intervelId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % dynamicHeading.length)
        }, 5000)
        return () => clearInterval(intervelId);
    }, [])

    const handleTabMenu = () => {
      setIsTabMenuOpen(!isTabMenuOpen)
    }
    const handleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const navLinks = [
      {name: "Living Room", link: '/living-room', hasDropdown: true},
      {name: "Bedroom", link: '/bedroom', hasDropdown: true},
      {name: "Dining Room", link: '/dining-room', hasDropdown: true},
      {name: "Mattresses", link: '/mattresses', hasDropdown: true},
      {name: "Kids", link: '/kids', hasDropdown: true},
      {name: "Accent Furniture / Rugs", link: '/accent-furniture-and-rugs', hasDropdown: true},
      {name: "Small Spaces", link: '/small-spaces', hasDropdown: true},
      {name: "Outlets", link: '/outlets', hasDropdown: true},
      {name: "Tent Sale", link: '/tent-sale', hasDropdown: true},
      
  ]
  const [nearStorePopUp, setNearStorePopUp] = useState(false)
  const handleNearStorePopUp = () => {
    setNearStorePopUp(!nearStorePopUp)
  }

  const storeDetailsData = [
    {
        city: 'Philadelphia', miles: '0.8 Miles', openUntil: '(Open Until 06: 30 PM)', openUntilIcon: <MdOutlineStars size={20} />,
        address: 'E Venango st, Philadelphia, PA 19134', addressCity: 'Philadelphia, Pennsylvania, 101', call: '267-639-6801',
        outlet: 'Outlet', outletLink: '#', direction: 'Directions', directionLink: '#', appointment: 'Book Appointment', appointmentLink: '#', openHours: 'Store Hours', hours: [
            {day: 'Sunday', time: '06: 30 PM'},
            {day: 'Monday', time: '06: 30 PM'},
            {day: 'Tuesday', time: '06: 30 PM'},
            {day: 'Wednesday', time: '06: 30 PM'},
            {day: 'Thursday', time: '06: 30 PM'},
            {day: 'Friday', time: '06: 30 PM'},
            {day: 'Saturday', time: '06: 30 PM'},
        ],
        virtualTour: 'Virtual Tour', virtualTourLink: '#', storeDetails: 'Store DEtails', storeDetailsLink: '#'
    },
    {
      city: 'Philadelphia', miles: '0.8 Miles', openUntil: '(Open Until 06: 30 PM)', openUntilIcon: <MdOutlineStars size={20} />,
      address: 'E Venango st, Philadelphia, PA 19134', addressCity: 'Philadelphia, Pennsylvania, 101', call: '267-639-6801',
      outlet: 'Outlet', outletLink: '#', direction: 'Directions', directionLink: '#', appointment: 'Book Appointment', appointmentLink: '#', openHours: 'Store Hours', hours: [
          {day: 'Sunday', time: '06: 30 PM'},
          {day: 'Monday', time: '06: 30 PM'},
          {day: 'Tuesday', time: '06: 30 PM'},
          {day: 'Wednesday', time: '06: 30 PM'},
          {day: 'Thursday', time: '06: 30 PM'},
          {day: 'Friday', time: '06: 30 PM'},
          {day: 'Saturday', time: '06: 30 PM'},
      ],
      virtualTour: 'Virtual Tour', virtualTourLink: '#', storeDetails: 'Store DEtails', storeDetailsLink: '#'
  }
]

  return (
    <div className='haider-main-container'>
      {/* Banner Responsive */}
      <div className='furniture-mecca-promotional-banner'>
        <div className='rotating-message'>
          {currentIndex === 1 ? <span>Need help ordering? <a className='toll-free-ancor' href='#'> Call 860-812-1111 </a> </span> 
          : currentIndex === 2 ? <span>Learn about my <a className='toll-free-ancor' href='#'>Financing Options</a> </span> 
          : <span>Shop Bob's everyday low prices!</span>}
        </div>
        <div className='banner-link-container'>
          <a href='#'>Stores</a>
          <a href='#'>Orders</a>
          <a href='#'>Financing</a>
          <a href='#'>Help</a>
        </div>
        <div className='on-tab-deliver-to'>
            <img src={deliverTo} alt="delivery" />
            <span> Deliver to : <a href='#'> 06042</a> </span>
            <img src={locationIcon} alt="location" className='promotion-banner-location' />
        </div>
      </div>

      <div className='header'>
        <div className='logo-container'>
          <a href='/'>
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className='search-bar-container'>
          <div className='search-bar-div'>
            <input type='search' placeholder='Search every thing' />
            <img src={searchIcon} alt="search icon" />
          </div>
        </div>
        <div className='nearby-address-container'>
          <div className='nearby-address-div'>
              <div className='icon-and-nearby-city'>
                <img src={NearStoreIcon} alt='near by' onClick={handleNearStorePopUp} />
                <NearStorePopUp isOpen={nearStorePopUp} setIsOpen={setNearStorePopUp} />
                <div className='near-by-city-time'>
                  <p>Nearest Store</p>
                  <span>
                    <a href='#'>Manchester - CT </a><p> (Opens at 10:00 AM)</p>
                  </span>
                </div>
                <span className='deliver-to'>
                  <p>Deliver to</p>
                  <span>06042</span>
                </span>
              </div>
          </div>
        </div>
        <div className='header-icons-container'>
          <img src={profileIcon} alt="profile" />
          <img src={HeartIcon} alt="heart" />
          <img src={cartIcon} alt="cart" />
        </div>
      </div>

      {/* Tablate Haider */}
      <div className='tab-view-header'>
        <div className='tab-view-header-containt'>
          <div className='header-view-toggle-and-profile-div'>
              <img src={navToggler} alt="togle button" onClick={handleTabMenu} className='tab-view-humburger-icon' />
              <img src={profileIcon} alt="profile" />
          </div>
          <div className='tab-view-logo-and-searchbar'>
            <img src={logo} alt='logo' />
            <div className='tab-view-searchbar-container'>
              <input type='search' placeholder="Search all things Bob's" />
              <img src={searchRed} alt="search" />
            </div>
          </div>
          <div className='tab-view-card-and-location'>
                <img src={locationIcon} alt="location" />
                <img src={cartIcon} alt="cart" />
          </div>
        </div>
      </div>

      {/* Mobile View Header */}
      <div className='mobile-view-header'>
        <div className='mobile-view-logo-and-icon'>
          <div className='toggle-and-profile-div'>
              <img src={navToggler} alt="togle button" onClick={handleTabMenu} />
              <img src={profileIcon} alt="profile" className='mobile-view-profile-icon' />
          </div>
          <div className='mobile-view-logo-div'>
              <img src={logo} alt='logo' />
          </div>
          <div className='mobile-view-card-and-location'>
              <img src={profileIcon} alt="profile" className='mobile-view-card-location-profile' />
              <img src={locationIcon} alt="location" className='movile-view-location' />
              <img src={cartIcon} alt="cart" />
          </div>
        </div>
        <div className='movile-view-search-bar-div'>
          <div className='movile-view-search-bar'>
            <input type='search' placeholder="Search all things Bob's" />
            <img src={searchRed} alt="search" />
          </div>
        </div>
      </div>
            {isMobileMenuOpen ? <MobileMenu /> : isTabMenuOpen ? <TabMenu isNavbarVisible={isTabMenuOpen} setIsNavbarVisible={setIsTabMenuOpen} navLinks={navLinks} /> : <Nav navLinks={navLinks} />}
    </div>
    
  )
}

export default Haider
