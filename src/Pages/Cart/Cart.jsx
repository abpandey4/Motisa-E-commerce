import'./Cart.css';
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

function Cart(){
    const {cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
        totalItems
    } = useContext(CartContext);

    // Shipping Charge
    const shipping = 0;

    // Grandtotal

    const grandTotal = totalPrice + shipping;

    if(cart.length === 0){
        return(
            <div className = "cart-empty">
                <h2>Your Cart is Empty</h2>
            </div>
        );
    }
    return(
        <div className='cart-page'>
            <h1>Shopping Cart</h1>
            {cart.map((product)=>(
                <div className='cart-card' key={product.id}>
                    <img
                        src = {product.image}
                        alt = {product.title}/>

                    <div className='cart-info'>
                        <h3>{product.title}</h3>
                        <h2>$ {product.price.toFixed(2)}</h2>

                        <div className='quantity'>
                            <button onClick={()=> decreaseQuantity(product.id)}>
                                -
                            </button>

                            <span>{product.quantity}</span>

                            <button onClick={()=> increaseQuantity(product.id)}>
                                +
                            </button>
                        </div>

                        <button className='remove-btn'
                                onClick={()=> removeFromCart(product.id)}>
                                    Remove
                        </button>

                    </div>

                </div>
            ))}

            {/* Cart summary */}

            <div className='cart-summary'>
                <h2>Order Summary</h2>

                <div className='summary-row'>
                    <span>Total Items</span>
                    <span>{totalItems}</span>
                </div>

                <div className='summary-row'>
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)} </span>
                </div>

                <div className='summary-row'>
                    <span>Shipping</span>
                    <span>{shipping === 0 ? " Free" : `$ ${shipping.toFixed(2)}`} </span>
                </div>

                <hr/>                                       {/* Horizontal line */} 
                <div className='summary-total'>
                    <span>Grand Total</span>
                    <span>${grandTotal.toFixed(2)}</span>
                </div>

                <Link to="/checkout">
                   <button className='checkout-btn'>
                     Proceed to Checkout
                   </button>
                </Link>
   
            </div>
        </div>
    )
}
export default Cart;

