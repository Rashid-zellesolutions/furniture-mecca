import React, { useState, useRef, useEffect } from 'react'
import './Products.css';
import AddBtn from '../../../Assets/icons/add-icon.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import heartImg from '../../../Assets/icons/like.png'
import muellerSofa from '../../../Assets/images/Mueller-Sofa-and-Loveseat-01-300x200 1.png';
import sherryImage from '../../../Assets/images/Sherry-Set-01-300x200 1.png'
import filledStar from '../../../Assets/icons/Star 19.png'
import filterHumberger from '../../../Assets/icons/humberger-icon.png'


const Products = () => {

    // All Initial State VAriables
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hideFilters, setHideFilters] = useState(false);
    const [relevanceTrue, setRelevanceTrue] = useState(false)
    
    const [showAvailaabilityBox, setShowAvailabilityBox] = useState(false)
    const [isTrue, setIsTrue] = useState(false)
    const [openFilterIndices, setOpenFilterIndices] = useState([]);
    const [showAllFilters, setShowAllFilters] = useState(false);
    const contentRefs = useRef([]);

    // All Arra Of Objects to render multiple data on one time
    const productData = [
        {heart: heartImg, mainImage: muellerSofa, hoverImage: sherryImage , productTitle: `Trevor Brown 90" Manual Reclining Sofa & 79" Console Loveseat`, ratingStars: [
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
            ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
            reviewCount: '(200)', priceTag: '$1,198.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                {color: '#FF0000'},
                {color: '#B78953'},
            ], deliveryTime: 'Get it in 3 to 4 days'
        },
        {heart: heartImg, mainImage: muellerSofa, productTitle: `Laurel Beige 85'' Sofa & 65'' Loveseat`, ratingStars: [
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
                // {icon: filledStar, title: 'filled'},
                // {icon: filledStar, title: 'filled'},
            ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
            reviewCount: '(100)', priceTag: '$999.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                {color: '#FF0000'},
                {color: '#B78953'},
            ], deliveryTime: 'Get it in 3 to 4 days'
        },
        {heart: heartImg, mainImage: muellerSofa, productTitle: `Avenger Black 89'' Power Reclining Sofa & 78'' Reclining Console Loveseat with USB`, ratingStars: [
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
                // {icon: filledStar, title: 'filled'},
            ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
            reviewCount: '(197)', priceTag: '$1,998.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                {color: '#FF0000'},
                {color: '#B78953'},
            ], deliveryTime: 'Get it in 3 to 4 days'
        },
        {heart: heartImg, mainImage: muellerSofa, productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                reviewCount: '(218)', priceTag: '$998.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: '#FF0000'},
                    {color: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days'
            },
        {heart: heartImg, mainImage: muellerSofa, productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    // {icon: filledStar, title: 'filled'},
                    // {icon: filledStar, title: 'filled'},
                ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                reviewCount: '(150)', priceTag: '$4,598.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: '#FF0000'},
                    {color: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days'
        },
        {heart: heartImg, mainImage: muellerSofa, productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    // {icon: filledStar, title: 'filled'},
                ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                reviewCount: '(180)', priceTag: '$1,398.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: '#FF0000'},
                    {color: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days'
        },
    ]

    const filtersData = [
        {name: 'Product Type' , icon: AddBtn, filters: [
            {type: 'checkbox', name: 'Dining Room Sets'},
            {type: 'checkbox', name: 'Bar Sets'},
            {type: 'checkbox', name: 'Kitchen Islands'},
            {type: 'checkbox', name: 'Kitchen Islands'},
        ]},
        {name: 'Color' , icon: AddBtn, filters: [
            {type: 'checkbox', name: 'Dining Room Sets'},
            {type: 'checkbox', name: 'Bar Sets'},
            {type: 'checkbox', name: 'Kitchen Islands'},
            {type: 'checkbox', name: 'Kitchen Islands'},
        ]},
        {name: 'Material' , icon: AddBtn, filters: [
            {type: 'checkbox', name: 'Dining Room Sets'},
            {type: 'checkbox', name: 'Bar Sets'},
            {type: 'checkbox', name: 'Kitchen Islands'},
            {type: 'checkbox', name: 'Kitchen Islands'},
        ]},
        {name: 'Collection' , icon: AddBtn, filters: [
            {type: 'checkbox', name: 'Dining Room Sets'},
            {type: 'checkbox', name: 'Bar Sets'},
            {type: 'checkbox', name: 'Kitchen Islands'},
            {type: 'checkbox', name: 'Kitchen Islands'},
        ]},
        {name: 'Style' , icon: AddBtn, filters: [
            {type: 'checkbox', name: 'Dining Room Sets'},
            {type: 'checkbox', name: 'Bar Sets'},
            {type: 'checkbox', name: 'Kitchen Islands'},
            {type: 'checkbox', name: 'Kitchen Islands'},
        ]},
        {name: 'Features' , icon: AddBtn, filters: [
            {type: 'checkbox', name: 'Dining Room Sets'},
            {type: 'checkbox', name: 'Bar Sets'},
            {type: 'checkbox', name: 'Kitchen Islands'},
            {type: 'checkbox', name: 'Kitchen Islands'},
        ]},
        {name: 'Price' , icon: AddBtn, filters: [
            {type: 'checkbox', name: 'Dining Room Sets'},
            {type: 'checkbox', name: 'Bar Sets'},
            {type: 'checkbox', name: 'Kitchen Islands'},
            {type: 'checkbox', name: 'Kitchen Islands'},
        ]},
        {name: 'Collection' , icon: AddBtn, filters: [
            {type: 'checkbox', name: 'Dining Room Sets'},
            {type: 'checkbox', name: 'Bar Sets'},
            {type: 'checkbox', name: 'Kitchen Islands'},
            {type: 'checkbox', name: 'Kitchen Islands'},
        ]},
        {name: 'Shipping Type' , icon: AddBtn, filters: [
            {type: 'checkbox', name: 'Dining Room Sets'},
            {type: 'checkbox', name: 'Bar Sets'},
            {type: 'checkbox', name: 'Kitchen Islands'},
            {type: 'checkbox', name: 'Kitchen Islands'},
        ]},
        {name: 'Review Rating' , icon: AddBtn, filters: [
            {type: 'checkbox', name: 'Dining Room Sets'},
            {type: 'checkbox', name: 'Bar Sets'},
            {type: 'checkbox', name: 'Kitchen Islands'},
            {type: 'checkbox', name: 'Kitchen Islands'},
        ]},
       
    ]

    const relatedCategoriesData = [
        {categoryName: 'Leather Living Room sets', link: '#'},
        {categoryName: 'Reclining Living Room Sets', link: '#'},
        {categoryName: 'Small space Living Room sets', link: '#'},
        {categoryName: 'Sleeper Sofa Living Room sets', link: '#'},
        {categoryName: 'Sofa & Loveseat sets', link: '#'},
        {categoryName: 'Sofa & chair sets', link: '#'},
    ]

    // Change image on hover function
    const handleImageHover = (index) => {
      setHoveredIndex(index);
    };
  
    const handleImageHoverLeave = () => {
      setHoveredIndex(null);
    };

    // show availiblity of product dropdown function
    const handleMouseEnter = () => {
        setShowAvailabilityBox(true)
    }

    const handleMouseLeave = () => {
        setShowAvailabilityBox(false)
    }

    // filter Relevance function
    const handleFilterSection = () => {
        setHideFilters(!hideFilters)
    }
    
    const handleRelevance = () => {
        setRelevanceTrue(!relevanceTrue);
    }

    // show filter type data
    const handleFilterClick = (index) => {
        setOpenFilterIndices(prev => {
            if (prev.includes(index)) {
                return prev.filter(i => i !== index); // Close the filter
            } else {
                return [...prev, index]; // Open the filter
            }
        });
    };

    const toggleFiltersVisibility = () => {
        setShowAllFilters(prevState => !prevState);
    };


    // show 5 filters defould and on click all
    useEffect(() => {
        contentRefs.current.forEach((content, index) => {
            if (content) { // Check if content is not null
                if (openFilterIndices.includes(index)) {
                    content.style.height = content.scrollHeight + 'px';
                } else {
                    content.style.height = 0;
                }
            }
        });
    }, [openFilterIndices]);

    // Select Color Variations Functions
    const [selectedColorIndices, setSelectedColorIndices] = useState(Array(productData.length).fill(0));
    const handleVariantImageClick = (cardIndex, colorIndex) => {
        const updatedIndices = [...selectedColorIndices];
        updatedIndices[cardIndex] = colorIndex;
        setSelectedColorIndices(updatedIndices);
    };

  return (
    <div className='products-main-container'>
        <h3>Dining Room Furniture Sets</h3>
        {/* Toggle section code */}
        <div className='toggle-sort-section'>
            <div className='hide-and-show-filters-button-container' onClick={handleFilterSection}>
                <img src={filterHumberger} alt='img' />
                <button>{hideFilters ? 'Show Filters' : 'Hide Filters'}</button>
            </div>
            <div className='set-zip-to-dileviry-container'>
                <div class="checkbox-wrapper-1">
                    <input class="tgl-one tgl-light" id="cb1-1" type="checkbox"/>
                    <label class="tgl-btn" for="cb1-1" />
                </div>
                <span>
                    <p>Deliver to: </p>
                    <h5>04062 (Change)</h5>
                </span>
            </div>
            <div className='sort-availablity-container'>
                <div class="checkbox-wrapper-2">
                    <input class="tgl-two tgl-light" id="cb1-2" type="checkbox"/>
                    <label class="tgl-btn" for="cb1-2" />
                </div>
                <span>
                    <p>Availabiliity: </p>
                    <h5 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                        Within 3 Months
                        <div className={`availability-dropdown ${showAvailaabilityBox ? 'show-box' : ''}`}>
                            <p> <a href='#'>Within 3 Months</a></p>
                            <p> <a href='#'>Within 8 Weeks</a> </p>
                        </div>
                    </h5>
                </span>
            </div>
        </div>
        <div className='products-and-filter-container'>
            {/* Filters side bar section code */}
            <div className={`filters-section ${hideFilters ? 'hide-filter' : ''}`}>
                <div className='filters-heading-section'>
                    <h3>Filters</h3>
                    <p>Clear Filters</p>
                </div>
                <div className='all-filters-section'>
                {filtersData.slice(0, showAllFilters ? filtersData.length : 5).map((item, index) => {
                        const isOpen = openFilterIndices.includes(index);
                        return <div key={index} className='single-filter'>
                        <span onClick={() => handleFilterClick(index)}>
                            <p>{item.name}</p>
                            <img src={item.icon} alt='btn' className={isOpen ? 'rotate' : ''} />
                        </span>
                        <div className={`filters ${isTrue ? 'show-filter' : ''}`} ref={el => contentRefs.current[index] = el}  >
                            {item.filters.map((innerItem, innerIndex) => {
                                return <span key={innerIndex}>
                                <input type={innerItem.type} placeholder='checkbox' />
                                <label >{innerItem.name}</label>
                            </span>
                            })}
                            
                        </div>
                    </div>
                    })}
                </div>
                <button onClick={toggleFiltersVisibility}>
                {showAllFilters ? 'Show Less Filters' : 'View All Filters'}
            </button>
            </div>
            {/* Products section code */}
            <div className={`products-section ${hideFilters ? 'full-width' : ''}`}>
                {/* product heading */}
                <div className='products-heading'>
                    <p>220 Items starting at $266.99</p>
                    <div className='sortby-relevance'>
                        <h3>Sort by:</h3>
                        <span onClick={handleRelevance}>
                            <p>Relevance</p>
                            <MdKeyboardArrowDown size={20} />
                        </span>
                        <div className={`relevance-dropdown ${relevanceTrue ? 'show-relevance' : ''}`}>
                            <p>Item One</p>
                            <p>Item Two</p>
                            <p>Item Three</p>
                        </div>
                    </div>
                </div>
                {/* product cards  */}
                <div className='product-main'>
                    {productData.map((item, index) => {
                        return <div key={index} className={`product-card ${hideFilters ? 'card-width-increase' : ''}`}>
                        <div className='product-card-data'>
                            <div className='heart-icon-div'>
                                <img src={item.heart} alt='heart img' className='heart-icon' />
                            </div>
                            <img src={hoveredIndex === index && item.hoverImage ? item.hoverImage : item.mainImage}  
                                alt='product img' className='product-main-img' 
                                onMouseEnter={() => handleImageHover(index)} 
                                onMouseLeave={handleImageHoverLeave} />
                            <p className='product-title'>{item.productTitle}</p>
                            <div className='product-rating-stars-div'>
                                {item.ratingStars.map((stars, starIndex) => {
                                    return <img key={starIndex} src={stars.icon} alt={stars.title} className='rating-star' />
                                })}
                                <p>{item.reviewCount}</p>
                            </div>
                            <p className='product-low-price-addvetisement'>{item.lowPriceAddvertisement}</p>
                            <h3 className='product-price-tag'>{item.priceTag}</h3>
                            <div className='product-financing-addvertisement-div'>
                                <p>{item.financingAdd}</p>
                                <a href='#'>{item.learnMore}</a>
                            </div>
                            <div className='color-variation-div'>
                                {item.colorVariation.map((color, colorIndex) => {
                                    return <span key={colorIndex} className='color-variation' onClick={() => handleVariantImageClick(index, colorIndex)} 
                                    style={{
                                        backgroundColor: `${color.color}`,
                                        border: selectedColorIndices[index] === colorIndex ? `1px solid ${color.color}` : 'none',
                                        boxShadow: selectedColorIndices[index] === colorIndex ? `inset 0 0 0 2px #FFFF` : ''
                                    }}></span>
                                })}
                            </div>
                            <p className='product-delivery-time'>{item.deliveryTime}</p>
                        </div>
                    </div>
                    })}
                </div>
                <div className='view-more-products-button-div'>
                    <button className='view-more-btn'>View 196 more</button>
                </div>
                {/* Related Categories Code */}
                <div className='related-categories-div'>
                    {relatedCategoriesData.map((item, index) => {
                        return <a key={index} href={item.link}>{item.categoryName}</a>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products