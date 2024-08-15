import React from 'react'
import './ImageHeading.css';

const ImageHeading = ({img, alt}) => {
  return (
      <div className='image-heading-container'>
        <img src={img} alt={alt}  />
      </div>
  )
}

export default ImageHeading
