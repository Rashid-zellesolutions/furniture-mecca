import React from 'react'
import './MattressesMenu.css';
import cashtonImage from '../../../Assets/Mattress-navlink-images/Cashton.jpg'
import cyrilkImage from '../../../Assets/Mattress-navlink-images/Cyrilk-.jpg'
import medellinImage from '../../../Assets/Mattress-navlink-images/medellin.jpg'

const MattressesMenu = () => {

    const mattressesLinks = [
        {name: 'Living Room Sets', link: '#'},
        {name: 'Sofa & Couches', link: '#'},
        {name: 'Sectionals', link: '#'},
        {name: 'Love Seats', link: '#'},
        {name: 'Reclining Furniture', link: '#'},
        {name: 'Sleaper Sofa & Futons', link: '#'},
        {name: 'Chairs', link: '#'},
        {name: 'Recliner', link: '#'}
        
    ]
    const mattressNavImages = [
        {title: "Cashton Sofa and Loveseat", price: '$799', img: cashtonImage},
        {title: "Cyrilk Sectional with Pull Out Bed", price: '$799', img: cyrilkImage},
        {title: "Medellin Sofa and Loveseat", price: '$1299', img: medellinImage},
    ]
  return (
    <div className='mattresses-main-div'>
        <div className='menu-links'>
            <h3 className='living-room-heading'>Living Room</h3>
            <div className='mattresses-links-div'>
                {mattressesLinks.map((item, index) => {
                    return <p className='mattres-links' key={index}>
                        <a href={item.link}>{item.name}</a>
                    </p>
                })}
            </div>
        </div>
        <div className='mattresses-images-div'>
            {mattressNavImages.map((item, index) => {
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

export default MattressesMenu
