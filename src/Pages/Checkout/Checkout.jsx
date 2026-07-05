import "./Checkout.css";
import { useContext , useState} from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";


function Checkout(){
    const{ cart, totalItems, totalPrice, clearCart } = useContext(CartContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        payment: "cod"
    });

    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const validateForm = ()=>{
        if(!formData.fullName.trim()){
            alert("Please enter your Full Name");
            return false;
        }

        if(!/^[0-9]{10}$/.test(formData.phone)){
            alert("Please enter a valid 10-digit Phone Number");
            return false;
        }

        if(!formData.city.trim()){
            alert("Please enter your City");
            return false;
        }

        if(!formData.state.trim()){
            alert("Please Enter your State");
            return false;
        }

        if (!/^[0-9]{6}$/.test(formData.pincode)){
            alert("Please enter a valid 6 digit Pincode");
            return false;
        }

        return true;
    }

    const handlePlaceOrder = ()=>{
        if(!validateForm()){
            return;
        }
        clearCart();                      // empties the cart 
        navigate("/order-success");
    };

    return(
        <div className="checkout-page">
            <h1 className="checkout-title">Checkout</h1>

            <div className="checkout-container">

                {/* left side */}
                <div className="checkout-form">
                    <h2>Customer Information</h2>

                    <div className="form-group">
                        <label>Full Name:-</label>
                        <input type="text"
                        name="fullName" 
                        placeholder="Enter Your Full Name"
                        value={formData.fullName}
                        onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Phone Number:-</label>
                        <input type="tel"
                        name="phone" 
                        placeholder="Enter Your Phone Number"
                        value={formData.phone}
                        onChange={handleChange}/>
                    </div>

                    <h2 className="section-title">Shipping Address</h2>

                    <div className="form-group">
                        <label>Address:-</label>
                        <input type="text"
                        name="address" 
                        placeholder="Street Address"
                        value={formData.address}
                        onChange={handleChange}/> 
                    </div>

                    <div className="form-group">
                        <label>City:-</label>
                        <input type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}/> 
                    </div>

                    <div className="form-group">
                        <label>State:-</label>
                        <input type="text"
                        name="state" 
                        placeholder="State"
                        value={formData.state}
                        onChange={handleChange}/>
                    </div>
                    
                    <div className="form-group">
                        <label>Pincode:-</label>
                        <input type="text" 
                        name="pincode"
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={handleChange}/>
                    </div>

                    <h2 className="section-title">Payment Method</h2>

                    <div className="payment-method">
                        <label>
                            <input type="radio" 
                            name="payment"
                            value="cod"
                            checked={formData.payment === "cod"}
                            onChange={handleChange}/>
                            Cash On Delivery
                        </label>

                        <label>
                            <input type="radio" 
                            name="payment"
                            value="card"
                            checked={formData.payment === "card"}
                            onChange={handleChange}/>
                            Credit/Debit Card
                        </label>

                    </div>
                </div>

                {/* Right side */}

                <div className="checkout-summary">
                    <h2>Order Summary</h2>

                    <div className="summary-row">
                      <span>Total Items</span>
                      <span>{totalItems}</span>
                    </div>

                    <div className="summary-row">
                      <span>Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>

                    <div className="summary-row">
                       <span>Shipping</span>
                       <span>Free</span>
                    </div>

                    <hr/>

                    <div className="summary-row grand-total">
                       <span>Grand Total</span>
                       <span>${totalPrice.toFixed(2)}</span>
                    </div>

                    <button className="placeorder-btn" onClick={handlePlaceOrder}>
                       Place Order
                    </button> 
                 </div>
           </div>
        </div>                          
    );
}
export default Checkout;