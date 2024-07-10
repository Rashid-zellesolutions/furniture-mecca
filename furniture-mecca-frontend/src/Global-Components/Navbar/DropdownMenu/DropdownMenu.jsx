import React from 'react'
import './DropdownMenu.css';


const DropdownMenu = ({navHeading, dropDownNavData, dropDownNavImages }) => {

    
  return (
    <div className='mattresses-main-div'>
                {dropDownNavData[0].heading === 'Accent Furniture / Rugs' ? (dropDownNavData[0].links.map((item, i) => {
                    return <div className='menu-links'>
                        <h3 className='living-room-heading'>{item.headingOne}</h3>
                        <div className='mattresses-links-div'>
                            <p>
                                {item.innerLinks.map((it, i) => {
                                    return <p className='mattres-links'>
                                        <a href={it.link}>{it.name}</a>
                                    </p>
                                })}
                            </p>
                        </div>
                    </div>
                    
                    })) 
                    : <div style={{display: 'flex'}}>
                        <div className='menu-links'>
                        <h3 className='living-room-heading'>{navHeading}</h3>
                        <div className='mattresses-links-div'>
                            {dropDownNavData[0].links.map((item, index) => {
                                return <p className='mattres-links' key={index}>
                                    <a href={item.link}>{item.name}</a>
                                </p>
                            })}
                        </div>
                        </div> 
                    </div>
                }
        <div className='mattresses-images-div'>
            {dropDownNavData[0].Images.map((item, index) => {
                return <div key={index} className='mattress-image'>
                    <img src={item.img} alt={item.title} />
                    <p className='image-title'>{item.title}</p>
                    <p className='price'>{item.price}</p>
                </div>
            })}
        </div>
        
    </div>
  )
}

export default DropdownMenu
