import React, {useState} from 'react'
import './NewArrival.css';
import goldenDiningRoomSet from '../../../Assets/images/Dining-Room-Set-in-Gold-02 1.png';
import blackDiningRoomSet from '../../../Assets/images/Dining-room-set-black.png';
import whiteDiningRoomSet from '../../../Assets/images/dining-room-set-white.png';
import cartRed from '../../../Assets/icons/cart.png';
import { FaEye } from "react-icons/fa";
import cart from '../../../Assets/icons/cart-white.png';
import { Link } from 'react-router-dom';

const NewArrival = () => {

    const [cartHoverIndex, setCartHoverIndex] = useState(null);
    const handleCartHover = (index) => {
      setCartHoverIndex(index);
    }
    const handleCardHoverLeave = () => {
      setCartHoverIndex(null)
    }
    const cardData = [
        {
            cardImage: goldenDiningRoomSet, pieces: '8 Pieces', title: 'Trellis Room Set', price: '$599', addCartLink: '#', 
            addCartIcon: cart, addCart: 'add to cart', viewAllLink: '#', viewIcon: <FaEye  size={20}/>, viewAll: "View All" 
        },
        {
            cardImage: blackDiningRoomSet, pieces: '5 Pieces', title: 'Trellis Room Set', price: '$599', addCartLink: '#', 
            addCartIcon: cart, addCart: 'add to cart', viewAllLink: '#', viewIcon: <FaEye  size={20}/>, viewAll: "View All" 
        },
        {
            cardImage: whiteDiningRoomSet, pieces: '4 Pieces', title: 'Trellis Room Set', price: '$599', addCartLink: '#', 
            addCartIcon: cart, addCart: 'add to cart', viewAllLink: '#', viewIcon: <FaEye  size={20}/>, viewAll: "View All" 
        },
    ]
  return (
    <div className='new-arrival-main'>
      <div className='new-arrival-heading-div'>
        <a href='#'>New Arrivals</a>
        <a href='#'>View All</a>
      </div>
      <div className='new-arrival-cards'>
        {cardData.map((items, index) => {
            return <div key={index} className='card'>
            <div className='card-header'>
                <img src={items.cardImage} alt='img' />
                <span className='pieces-text'>{items.pieces}</span>
                <span className='title-and-price'><p className='new-arrival-product-name'>{items.title}</p> <p className='new-arrival-product-price'>{items.price}</p></span>
            </div>
            <div className='card-buttons'>
                <Link to={items.addCartLink} onMouseEnter={() => handleCartHover(index)} onMouseLeave={handleCardHoverLeave}>
                  <img src={cartHoverIndex === index ? cartRed : items.addCartIcon} alt='icon' />
                  <p> {items.addCart} </p>
                </Link>
                <a href={items.viewAllLink}>
                    {items.viewIcon}
                    <p>{items.viewAll}</p>
                </a>
            </div>
        </div>
        })}
        
      </div>
    </div>
  )
}

export default NewArrival
