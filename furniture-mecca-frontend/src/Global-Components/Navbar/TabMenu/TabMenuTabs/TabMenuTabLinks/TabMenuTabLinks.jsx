import React from 'react'
import './TabMenuTabLinks.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const TabMenuTabLinks = ({name, closeSubMenuLinks, ind, innerInd, tabSublinksData}) => {
  
  console.log("tab menu links", tabSublinksData[ind].furnitureSubData[innerInd].furnitureLinks[ind].name)
  console.log("index of ", ind)
  
  return (
    <div className='tab-sub-menu-links'>
      <div className={`sub-nav-header `}>
          <span className='back-to-main-menu' onClick={closeSubMenuLinks}><FaChevronLeft size={17} /></span>
          <div className='sub-menu-heading-container'>
              <h3>{name}</h3>
              <span><a href='#'> Shop all</a> | <a href='#'> Shop via Chat</a></span>
          </div>
      </div>
      <div className='tab-sub-menu-link'>
        {tabSublinksData[ind].furnitureSubData[innerInd].furnitureLinks.map((item, index) => {
          return <h3 className='tab-sub-menu-link-item'>
           <a href={item.link}> {item.name} </a>
          </h3>
        })}
      </div>
      
    </div>
  )
}

export default TabMenuTabLinks
