import React, { useEffect, useState} from 'react'
import './Products.css';
import { Link } from 'react-router-dom';
import AddBtn from '../../../Assets/icons/add-icon.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import filterHumberger from '../../../Assets/icons/humberger-icon.png'
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { useNavigate } from 'react-router-dom';
import arrowBlack from '../../../Assets/icons/hide-arrow-black.png'

const Products = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hideFilters, setHideFilters] = useState(false);
    const [relevanceTrue, setRelevanceTrue] = useState(false)
    const navigate = useNavigate()
    
    const [showAvailaabilityBox, setShowAvailabilityBox] = useState(false)
   
    const [showAllFilters, setShowAllFilters] = useState(false);
    // Products Data From Redux
    const productData = useSelector((state) => state.products.data)
    const handleProductClick = (item) => {
        navigate(`/single-product/${item.id}`, { state: { products: item } });
        console.log(`card clicked /single-product/${item.id}`)
    };

    const filtersData = [
        {name: 'Product Type' , icon: AddBtn, filters: [
            {type: 'checkbox', name: 'Dining Room Sets'},
            {type: 'checkbox', name: 'Bar Sets'},
            {type: 'checkbox', name: 'Kitchen Islands'},
            {type: 'checkbox', name: 'Kitchen Islands'},
        ]},
        {name: 'Color' , icon: AddBtn, filters: [
            {type: 'checkbox', name: 'Blue'},
            {type: 'checkbox', name: 'Green'},
            {type: 'checkbox', name: 'Orange'},
            {type: 'checkbox', name: 'Red'},
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

    const initialOpenFilters = filtersData.map((_, index) => index);
    const [openFilterIndices, setOpenFilterIndices] = useState(initialOpenFilters);

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

    // show max 5 filters default and on click all
    const toggleFiltersVisibility = () => {
        setShowAllFilters(prevState => !prevState);
    };

    // Card title words limit
    const maxLength = 50;
    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...';
        }
        return title;
    };

    // Select Color Variations Functions
    const [selectedColorIndices, setSelectedColorIndices] = useState(Array(productData.length).fill(0));
    const handleVariantImageClick = (cardIndex, colorIndex) => {
        const updatedIndices = [...selectedColorIndices];
        updatedIndices[cardIndex] = colorIndex;
        setSelectedColorIndices(updatedIndices);
    };

    const colorIndex = useSelector((state) => state.colorIndex.colorIndex)
  return (
    <div className='products-main-container'>
        <h3>Dining Room Furniture Sets</h3>
        {/* Toggle section code */}
        <div className='toggle-sort-section'>
            <div className='hide-and-show-filters-button-container' onClick={handleFilterSection}>
                <button> <img src={filterHumberger} alt='img' /> {hideFilters ? 'Show Filters' : 'Hide Filters'}</button>
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
                            <p> <Link to={'#'}>Within 3 Months</Link></p>
                            <p> <Link to={'#'}>Within 8 Weeks</Link> </p>
                        </div>
                    </h5>
                </span>
            </div>
        </div>
        <div className='products-and-filter-container'>
            {/* Filters side bar section code */}
            <div className={`filters-section ${hideFilters ? 'hide-filter' : ''}`}>
                <div className='hide-filters-btn'>
                    <button onClick={handleFilterSection}> <img src={arrowBlack} alt='arrow black' /> Hide Filters</button>
                </div>
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
                        <div className={`${item.name === 'Color' ? 'color-filter' : 'filters'} ${isOpen ? 'show-filter' : ''}`} >
                            {item.name === 'Color' ? (
                                item.filters.map((innerItem, innerIndex) => (
                                    <span key={innerIndex} className={`color-span`} >
                                        <input type={innerItem.type} placeholder='checkbox' className='custom-checkbox'
                                        id={`filter-${innerIndex}`}/>
                                        <label htmlFor={`filter-${innerIndex}`}>{innerItem.name}</label>
                                    </span>
                                ))
                            ) : (
                                item.filters.map((innerItem, innerIndex) => (
                                    <span key={innerIndex}>
                                        <input type={innerItem.type} placeholder='checkbox' className='custom-checkbox'
                                        id={`filter-${innerIndex}`} />
                                        <label htmlFor={`filter-${innerIndex}`}>{innerItem.name}</label>
                                    </span>
                                )) 
                            )}
                        </div>
                    </div>
                    })}
                </div>
                <div className='less-or-all-filters-btn'>
                    <button onClick={toggleFiltersVisibility}>
                        {showAllFilters ? 'Show Less Filters' : 'View All Filters'}
                    </button>
                </div>
                
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
                <div className='product-main'>
                    {productData.map((item, index) => {
                        return <ProductCard key={index} maxWidthAccordingToComp={'33.33%'} justWidth={'100%'} tagIcon={item.productTag ? item.productTag : item.heart}
                            tagClass={` ${item.productTag ? 'tag-img' : 'heart-icon'}`}
                            tagDivClass={`${item.productTag ? 'product-tag-div' : 'heart-icon-div'}`}
                            mainImage={hoveredIndex === index && item.hoverImage ? item.hoverImage : item.mainImage}
                            productCardContainerClass={`product-card ${hideFilters ? 'card-width-increase' : ''}`}
                            mouseEnter={() => handleImageHover(index)}
                            mouseLeave={handleImageHoverLeave} ProductTitle={truncateTitle(item.productTitle, maxLength)}
                            stars={item.ratingStars} reviewCount={item.reviewCount} lowPriceAddvertisement={item.lowPriceAddvertisement}
                            priceTag={item.priceTag} financingAdd={item.financingAdd} learnMore={item.learnMore} colorVariation={item.colorVariation}
                            mainIndex={index} deliveryTime={item.deliveryTime} 
                            selectedColorIndices={selectedColorIndices} handleVariantColor={() => handleVariantImageClick(index, colorIndex)}
                            borderLeft={index % 3 === 2} handleCardClick={() => handleProductClick(item)}
                        />
                    })}
                </div>
                {/* Product Card Code End */}
                <div className='view-more-products-button-div'>
                    <button className='view-more-btn'>View 15 more</button>
                </div>
            </div>
        </div>
        {/* Related Categories Code */}
        <div className='related-categories-div'>
            <h3>Related Categories</h3>
            <div className='related-categories-items'>
                {relatedCategoriesData.map((item, index) => {
                    return <Link key={index} to={item.link}>{item.categoryName}</Link>
                })}
            </div>
        </div>
    </div>
  )
}

export default Products