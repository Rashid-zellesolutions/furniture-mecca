import { createContext, useState, useContext } from "react";

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [cartSectionOpen, setCartSectionOpen] = useState(false);

    // Add Items To Cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            setCartSectionOpen(true)
            const existingProduct = prevCart.find(item => item.product.id === product.id);
            if(existingProduct){

                return prevCart.map(item => 
                    item.product.id === product.id ? {...item, quantity: item.quantity + 1} : item
                );
            }else{
                return [...prevCart, {product, quantity: 1}];
                
            }
        });
    };

    console.log("after cart", cart)

    // Remove Cart Item
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.product.id !== id));
    };

    // Increase Product Quantity
    const increamentQuantity = (id) => {
        setCart((prevCart) => {

            // to insure prevCart is not undefine
            if(!prevCart) return [];

            return prevCart.map(item => 
                item.product.id === id ? {...item, quantity: item.quantity + 1} : item
            );
        });
    };

    // Decreament Product Quantity
    const decreamentQuantity = (id) => {
        setCart((prevCart) => {
            const updateCart = prevCart.map(item => 
                item.product.id === id ? {...item, quantity: Math.max(item.quantity - 1, 1)} : item
            );
            return updateCart.filter(item => item.quantity > 0);
        })
    }
    // Calculate total orders price
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => {

            // Directly use priceTag as a number
            const price = item.product.priceTag;
            return total + (price * item.quantity);
        }, 0);
    };

    return (
        <CartContext.Provider value={{cart, addToCart, cartSectionOpen, setCartSectionOpen, removeFromCart, increamentQuantity, decreamentQuantity, calculateTotalPrice}}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => useContext(CartContext);