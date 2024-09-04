import React from 'react'
import './AddToCart.css'
import CartMainImage from '../../Components/Cart-Components/CartMainImage/CartMainImage'
import CartProducts from '../../Components/Cart-Components/Cart-Products/CartProducts'
import CartProduct from '../../Components/Cart-Components/Cart-Products/CartProduct/CartProduct'

const AddToCart = () => {
  return (
    <div>
        <CartMainImage />
        <CartProducts />
        {/* <CartProduct /> */}
    </div>
  )
}

export default AddToCart
