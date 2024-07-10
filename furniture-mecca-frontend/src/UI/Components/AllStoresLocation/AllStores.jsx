import React from 'react'
import './AllStores.css';
import storeImage from '../../../Assets/images/06.png'

const AllStores = () => {
    const stores = [
        {img: storeImage, address: '101 E. Venango St, Philadelphia'},
        {img: storeImage, address: '1430 W Hunting Park Ave Philadelphia '},
        {img: storeImage, address: '501 S. 69th Street Upper Darby'},
        {img: storeImage, address: '130 E Baltimore Ave, Lansdowne PA'},
        {img: storeImage, address: '1830 Delmar Drive, Folcroft PA'},
        {img: storeImage, address: '1600 N Olden Ave. Ewing'},
        {img: storeImage, address: '408 Penn St Reading'},
        {img: storeImage, address: '5648 Lancaster Ave Philadelphia,'},
        {img: storeImage, address: '611 W Brookdale St, Allentown'},
    ]
  return (
    <div className='all-stores-main-container'>
      <div className='store-cards-container'>
            {stores.map((item, index) => {
                return <div className='stores-card'>
                    <div className='image-container'>
                        <img src={item.img} alt='img' />
                    </div>
                    <p>{item.address}</p>
                </div>
            })}
      </div>
      <div className='find-stores'>
        <div className='find'>
            <h3>Celebrate the FM's way</h3>
            <p>Enjoy everyday low prices, free coffee and treats, and never any phony sales.</p>
            <button>Find Your Store</button>
        </div>
      </div>
    </div>
  )
}

export default AllStores
