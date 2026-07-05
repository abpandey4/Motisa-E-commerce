import { createContext, useState } from "react";

// create context

export const CartContext = createContext();

// cart provider

function CartProvider({children}){

    // global cart state
    const [cart, setCart] = useState([]);

    //Add Product

    const addToCart = (product) =>{
        setCart((prevCart)=>{

            // check if product is already exist
            const isProductExist = prevCart.find((item)=> item.id === product.id);

            // If exists --> increase quantity
            if(isProductExist){
                return prevCart.map((item)=>item.id === product.id ? {...item, quantity: item.quantity + 1} : item)     
            }

            // otherwise add new product
            return[...prevCart,{...product, quantity:1}];
        })
    }

    // Remove Product

    const removeFromCart = (id) =>{
        setCart((prevCart)=>prevCart.filter((item)=>item.id !== id));
    };

    // Increase Quantity
    
    const increaseQuantity = (id) =>{
        setCart((prevCart)=> prevCart.map((item)=> item.id === id ?{...item, quantity: item.quantity+1}:item));
    }

    // Decrease Quantity

    const decreaseQuantity = (id) =>{
        setCart((prevCart)=> prevCart.map((item)=> item.id === id ? {...item, quantity: item.quantity-1 }:item)
        .filter((item)=> item.quantity>0));
    }

    const clearCart=()=>{setCart([])}
    
    // Total Items

    const totalItems = cart.reduce(
        (total, item) => total+ item.quantity, 0
    )

    // Total Price

    const totalPrice = cart.reduce(
        (total,item) => total +item.price * item.quantity, 0
    )
    return(
        <CartContext.Provider
            value = {{cart,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                clearCart,
                totalItems,
                totalPrice
            }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;