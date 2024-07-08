import React, { useState, useEffect } from 'react'
import './TabMenu.css'
import TabMenuTab from './TabMenuTabs/TabMenuTab'
import { FaChevronRight } from "react-icons/fa6";

const TabMenu = ({navLinks}) => {
  const [isTabClicked, setIsTabClicked] = useState(null)
  const [activeIndex, setActiveIndex] = useState(null)
  const [isTabSubNavOpen, setIsTabSubNavOpen] = useState(false);

  const handleTabSubMenu = (index) => {
    setIsTabClicked(index)
    setIsTabSubNavOpen(true)
    
  }
  const handleCloseSubMenu = () => {
    setActiveIndex(null)
    setIsTabSubNavOpen(false)
  }
  const handleActiveIndex = (index) => {
    setActiveIndex(index)
    
  }
  return (
    <div className='tablet-menu-container'>
      <div className={`tab-menu-items ${isTabSubNavOpen ? 'hide' : ''}`}>
        {navLinks.map((items, index) => {
          return <div key={index} className='tab-menu-link' onClick={() => items.hasDropdown && handleTabSubMenu(index)}>
            <h3 onClick={() => handleActiveIndex(index)}>{items.name} <span><FaChevronRight size={17} /></span></h3>          
          </div>  
        })}
        <div className='tab-menu-extra-options'>
          <span><a href='#'>View in Your Room App</a></span>
          <span><a href='#'>live Chat</a></span>
        </div>
      </div>
      {activeIndex !== null && (
        <div className="sub-menu">
          <TabMenuTab closeMenu={handleCloseSubMenu} name={navLinks[activeIndex].name} />
        </div>
      )}
    </div>
  )
}

export default TabMenu
