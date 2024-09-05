import React, { useState } from 'react'
import './QuickView.css';
import filledStar from '../../../Assets/icons/orange-star.png';
import unFilledStar from '../../../Assets/icons/orange-star-outline.png';
import testimage from '../../../Assets/Furniture Mecca/product archive page/product images/Dakota-Dining-Set-01-600x400 1.png';
import imgVariantOne from '../../../Assets/Furniture Mecca/product archive page/product images/Moondance-Bedroom-Set-01-1024x644 2 (1).png';
import imgVariantTwo from '../../../Assets/Furniture Mecca/product archive page/product images/Sherry-Set-01-300x200 1 (1).png';
import minusBtn from '../../../Assets/icons/minus.png'
import plusBtn from '../../../Assets/icons/plus.png';
import redHeart from '../../../Assets/icons/red-heart.png'
import arrowDown from '../../../Assets/icons/arrow-down-white.png';

const QuickView = () => {
    const stars = [filledStar, filledStar, filledStar, filledStar, unFilledStar]
    const [viewDetails, setViewDetails]= useState(false)
    const handleViewDetails = () => {
        setViewDetails(!viewDetails);
    }
  return (
    <div className='quick-view-main'>
        <div className='quick-view-heading-and-rating'>
            <h3>Trevor Brown 90'' Manual Reclining Sofa & 7vh9'' Console Loveseat</h3>
            <div className='quick-view-rating'>
                <div className='quick-view-start'>
                    {stars.map((star, index) => (
                        <img src={star} alt='star' />
                    ))}
                </div>
                <p>4.1 <span>200 Reviews</span></p>
                
            </div>
        </div>
        <div className='quick-view-image-and-variations'>
            <div className='quick-view-image'>
                <img src={testimage} alt='img' />
            </div>
            <div className='quick-view-variations'>
                <div className='quick-view-var-one'>
                    <img src={imgVariantOne} alt='variation' />
                    <p>Silver</p>
                </div>
                <div className='quick-view-vars'>
                    <img src={imgVariantTwo} alt='variation' />
                    <p>Brown</p>
                </div>
            </div>
        </div>
        <h3 className='quick-view-price'>$859.00</h3>
        <div className='quick-view-add-item-or-cart-btn'>
            <div className='quick-view-add-or-minus-item'>
                <button>
                    <img src={minusBtn} alt='minus' />
                </button>
                <p>1</p>
                <button>
                    <img src={plusBtn} alt='plus' />
                </button>
            </div>
            <img src={redHeart} alt='heart' />
            <button className='quick-view-add-to-cart'>
                Add To Cart
            </button>
        </div>
        <div className='quick-view-details-section'>
            <div className='quick-view-detail-single-section'>
                <div className='quick-view-details-heading'>
                    <p>Spacifications</p>
                    <button onClick={handleViewDetails}>
                        <img src={arrowDown} alt='arrow down' className={viewDetails ? 'quick-view-rotate-up' : 'quick-view-rotate-down'} />
                    </button>
                </div>
                <div className={`quick-view-details ${viewDetails ? 'show-details' : ''}`}>
                    detailed containt
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuickView
