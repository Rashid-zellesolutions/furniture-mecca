import React, { useState } from 'react';
import './FurnitureProducts.css';
import ChairOneImage from '../../../Assets/to-be-change/download 53.png';
import ChairTwoImage from '../../../Assets/to-be-change/download 54.png';
import ChairThreeImage from '../../../Assets/to-be-change/download 55.png';
import ChairFourImage from '../../../Assets/to-be-change/download 56.png';
import ChairFiveImage from '../../../Assets/to-be-change/download 57.png';
import ArrowLeft from '../../../Assets/icons/arrow-left.png';
import ArrowRight from '../../../Assets/icons/arrow-right.png';

const FurnitureProduct = () => {
    const [index, setIndex] = useState(0);

    const products = [
        { name: "Linen Chair", price: '$598', code: 'SKU: 1775-46-45', dimention: '175cm x 175cm x60cm', material: 'Wood', btnText: 'Buy Now', img: ChairOneImage },
        { name: "Teal Chair", price: '$598', code: 'SKU: 1775-46-45', dimention: '175cm x 175cm x60cm', material: 'Wood', btnText: 'Buy Now', img: ChairFiveImage },
        { name: "Ottoman Chair", price: '$598', code: 'SKU: 1775-46-45', dimention: '175cm x 175cm x60cm', material: 'Wood', btnText: 'Buy Now', img: ChairThreeImage },
        { name: "Dylan Chair", price: '$598', code: 'SKU: 1775-46-45', dimention: '175cm x 175cm x60cm', material: 'Wood', btnText: 'Buy Now', img: ChairFourImage },
        { name: "Playday Chair", price: '$598', code: 'SKU: 1775-46-45', dimention: '175cm x 175cm x60cm', material: 'Wood', btnText: 'Buy Now', img: ChairTwoImage },
        { name: "Rilly Ash Chair", price: '$598', code: 'SKU: 1775-46-45', dimention: '175cm x 175cm x60cm', material: 'Wood', btnText: 'Buy Now', img: ChairOneImage },
        { name: "Cottage Chair", price: '$598', code: 'SKU: 1775-46-45', dimention: '175cm x 175cm x60cm', material: 'Wood', btnText: 'Buy Now', img: ChairTwoImage },
        { name: "Playscape Chair", price: '$598', code: 'SKU: 1775-46-45', dimention: '175cm x 175cm x60cm', material: 'Wood', btnText: 'Buy Now', img: ChairThreeImage },
        { name: "Benone Chair", price: '$598', code: 'SKU: 1775-46-45', dimention: '175cm x 175cm x60cm', material: 'Wood', btnText: 'Buy Now', img: ChairFourImage },
        { name: "Swival Chair", price: '$598', code: 'SKU: 1775-46-45', dimention: '175cm x 175cm x60cm', material: 'Wood', btnText: 'Buy Now', img: ChairFiveImage },
        { name: "Damask Chair", price: '$598', code: 'SKU: 1775-46-45', dimention: '175cm x 175cm x60cm', material: 'Wood', btnText: 'Buy Now', img: ChairFiveImage },
        { name: "Laural Chair", price: '$598', code: 'SKU: 1775-46-45', dimention: '175cm x 175cm x60cm', material: 'Wood', btnText: 'Buy Now', img: ChairFourImage },
        { name: "Chaise Chair", price: '$598', code: 'SKU: 1775-46-45', dimention: '175cm x 175cm x60cm', material: 'Wood', btnText: 'Buy Now', img: ChairThreeImage },
        { name: "Pop Up Chair", price: '$598', code: 'SKU: 1775-46-45', dimention: '175cm x 175cm x60cm', material: 'Wood', btnText: 'Buy Now', img: ChairTwoImage },
        { name: "Miranda Chair ", price: '$598', code: 'SKU: 1775-46-45', dimention: '175cm x 175cm x60cm', material: 'Wood', btnText: 'Buy Now', img: ChairOneImage },
        { name: "Nova Chair", price: '$598', code: 'SKU: 1775-46-45', dimention: '175cm x 175cm x60cm', material: 'Wood', btnText: 'Buy Now', img: ChairThreeImage },
        { name: "O'Brian Chair", price: '$598', code: 'SKU: 1775-46-45', dimention: '175cm x 175cm x60cm', material: 'Wood', btnText: 'Buy Now', img: ChairThreeImage },
    ];

    const productPerPage = 3;

    const halfLength = Math.floor(products.length /2)
    const itemsPerSlide = 2;
    const totalSlides = Math.ceil(products.length / itemsPerSlide / 2);

    const handleNext = () => {
        if (index < totalSlides - 1) {
            setIndex(index + 1);
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <div className="container">
            <div className="product-slider">
                {index > 0 && <button onClick={handlePrev} className="product-arrow arrow-left"><img src={ArrowLeft} alt="Previous" /></button>}

                <div
                    className="row"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {products.slice(0, halfLength).map((product, i) => (
                        <div key={i} className="column">
                            <img src={product.img} alt={product.name} />
                            <div className='furniture-details-container'>
                                <p className='price'>{product.price}</p>
                                <h3 className='heading'>{product.name}</h3>
                                <p className='code'>{product.code}</p>
                                <p className='dimension'>Dimension:  {product.dimention}</p>
                                <p className='material'>Material:  {product.material}</p>
                                <button>{product.btnText}</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="row"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {products.slice(halfLength, products.length).map((product, i) => (
                        <div key={i} className="column">
                            <img src={product.img} alt={product.name} />
                            <div className='furniture-details-container'>
                                <p className='price'>{product.price}</p>
                                <h3 className='heading'>{product.name}</h3>
                                <p className='code'>{product.code}</p>
                                <p className='dimension'>Dimension:  {product.dimention}</p>
                                <p className='material'>Material:  {product.material}</p>
                                <button>{product.btnText}</button>
                            </div>
                        </div>
                    ))}
                </div>
                {index < totalSlides - 1 && <button onClick={handleNext} className="product-arrow arrow-right"><img src={ArrowRight} alt="Next" /></button>}
            </div>
            <div className='mobile-view-product-slider'>
                {index > 0 && <button onClick={handlePrev} className="product-arrow arrow-left"><img src={ArrowLeft} alt="Previous" /></button>}
                <div className='mobile-view-row'>
                    {products.slice(0, products.length).map((mobileViewProduct, i) => (
                        <div className='mobile-view-column'>
                            <img src={mobileViewProduct.img} alt={mobileViewProduct.name} />
                            <div className='mobile-view-product-details-container'>
                            <p className='price'>{mobileViewProduct.price}</p>
                                <h3 className='mobile-view-heading'>{mobileViewProduct.name}</h3>
                                <p className='mobile-view-code'>{mobileViewProduct.code}</p>
                                <p className='mobile-view-dimension'>Dimension:  {mobileViewProduct.dimention}</p>
                                <p className='mobile-view-material'>Material:  {mobileViewProduct.material}</p>
                                <button>{mobileViewProduct.btnText}</button>
                            </div>
                        </div>
                    ))}
                </div>

                {index < totalSlides - 1 && <button onClick={handleNext} className="product-arrow arrow-right"><img src={ArrowRight} alt="Next" /></button>}
            </div>
        </div>
    );
};

export default FurnitureProduct;
