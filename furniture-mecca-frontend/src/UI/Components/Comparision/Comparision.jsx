import React from 'react'
import './Comparision.css'
import ComparisionImage from '../../../Assets/Furniture Mecca/Comparision/comparision-img.jpg';

const Comparision = () => {
  return (
    <div className='comparision-main-div'>
        <h3>Compare & Shop - FM's vs Leading National Brand</h3>
        <div className='comparision-img-div'>
            <img src={ComparisionImage} alt='img' />
        </div>
    </div>
  )
}

export default Comparision
