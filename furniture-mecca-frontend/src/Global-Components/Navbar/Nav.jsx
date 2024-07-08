import React, {useState} from 'react'
import './Nav.css';
import FurnitureDropdown from './FurnitureMenu/FurnitureDropdown';
import MattressesMenu from './MattressesMenu/MattressesMenu';
import { GiHamburgerMenu, GiHumanCannonball } from "react-icons/gi";

const Nav = ({navLinks}) => {

    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null)

    const handleMouseEnter = (index) => {
        setDropdownOpen(index)
    }
    const handleMouseLeave = () => {
        setDropdownOpen(null);
    }
    const handleActiveItemIndex = (index) => {
        setActiveIndex(index)
    }

  return (
    <div className='navbar'>
        <nav className='navar-links-container'>
        {navLinks.map((item, index) => {
            return <h3 key={index} onMouseEnter={() => item.hasDropdown && handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave} onClick={() => handleActiveItemIndex(index)}
            className={`nav-item ${activeIndex === index ? 'active' : ''}`}>
                <a href={item.link} className='nav-link'> {item.name} </a>
                {dropdownOpen === index && (
                    <div className='dropdown'>
                        {index === 0 ? <FurnitureDropdown /> : index === 1 ? <MattressesMenu /> : <></>}
                    </div>
                )}
            </h3>
        })}
        <div className='mobile-navbar'>
            {navLinks.map((item, index) => {
                return  <h3 key={index} className='mobile-nav-link'>
                    <a href={item.link}>{item.name}</a>
                </h3>
            })}
        </div>
        </nav>
    </div>
  )
}

export default Nav
