import "./OrderSuccess.css";
import { Link } from "react-router-dom";

function OrderSuccess(){
    return(
        <div className="success-page">
            <div className="success-card">
                <div className="success-icon">
                    ✅   
                </div>

                <h1> Order Placed Successfully!</h1>
                <p>Thank you for Shopping with <strong>Motisa</strong></p>
                <p>Your Order has been recieved and will be processed soon</p>

                <Link to= "/" className="continue-btn">
                    Continue Shopping
                </Link>
            </div>
        </div>
    )
}
export default OrderSuccess;

