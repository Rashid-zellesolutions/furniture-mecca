import React, {useState, useEffect, useRef} from 'react'
import './ProductCard.css';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setColorIndex } from '../../../Redux/ColorIndex/ColorINdexSlicer';
import cartIcon from '../../../Assets/icons/cart-white.png'
import cartRed from '../../../Assets/icons/cart2.png';

const ProductCard = ({tagIcon, tagClass, tagDivClass, mainImage, productCardContainerClass, mouseEnter, mouseLeave, ProductTitle, stars, reviewCount, lowPriceAddvertisement,
    priceTag, financingAdd, learnMore, colorVariation, mainIndex, deliveryTime, handleVariantColor, selectedColorIndices, maxWidthAccordingToComp, borderLeft, justWidth, handleCardClick
}) => {
    
    const dispatch = useDispatch();
    const selectedColorIndex = useSelector((state) => state.colorIndex.colorIndex);
    const handleColorVariationIndex = (colorIndex) => {
        dispatch(setColorIndex(colorIndex))
    }

    const handleClick = (colorIndex) => {
        dispatch(setColorIndex(colorIndex));
        if (handleVariantColor) {
            handleVariantColor();
        }
    };

    const [cardHovered, setCardHovered] = useState(false);
    const handleMouseEnter = () => {
        setCardHovered(true)
        console.log(cardHovered);
    }

    const handleMouseLeave = () => {
        setCardHovered(false);
    }
    
  return (
    <>
        <div className={`${productCardContainerClass} ${borderLeft ? 'hide-after' : ''} `} style={{maxWidth: maxWidthAccordingToComp, width: justWidth}}>
            <div className='product-card-data' onClick={handleCardClick}>
                <div className={tagDivClass}>
                    <img src={tagIcon} alt='heart img' className={tagClass} />
                </div>
                <div className='product-main-image-container'>
                    <img src={mainImage}  
                        alt='product img' className='product-main-img' 
                        onMouseEnter={mouseEnter}
                        onMouseLeave={mouseLeave} />
                        <div className='overlay-buttons'>
                            <button className='overlay-button' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <img src={cardHovered ? cartIcon : cartRed} alt='cart' />
                                Add to cart
                            </button>
                            <button className='overlay-button'>
                                Quick View
                            </button>
                        </div>
                </div>

                <p className='product-title'> <Link> {ProductTitle} </Link> </p>
                <div className='product-rating-stars-div'>
                    {stars.map((stars, starIndex) => {
                        return <img key={starIndex} src={stars.icon} alt={stars.title} className='rating-star' />
                    })}
                    <p>{reviewCount}</p>
                </div>
                <p className='product-low-price-addvetisement'>{lowPriceAddvertisement}</p>
                <h3 className='product-price-tag'>{priceTag}</h3>
                <div className='product-financing-addvertisement-div'>
                <p>{financingAdd}</p>
                <a href='#'>{learnMore}</a>
            </div>
            <div className='color-variation-div'>
                {colorVariation.map((color, colorIndex) => {
                    return <span key={colorIndex} className='color-variation' onClick={() => handleClick(colorIndex)}
                    style={{
                        backgroundColor: `${color.color}`,
                        border: selectedColorIndices[mainIndex] === colorIndex ? `1px solid ${color.color}` : 'none',
                        boxShadow: selectedColorIndices[mainIndex] === colorIndex ? `inset 0 0 0 2px #FFFF` : ''
                    }}></span>
                })}
            </div>
                <p className='product-delivery-time'>{deliveryTime}</p>
            </div>
        </div>
    </>
  )
}

export default ProductCard
