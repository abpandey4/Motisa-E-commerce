import "./ForgotPassword.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function ForgotPassword(){
    const[email, setEmail] = useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(email)){
            alert("Please enter a valid Email");
            return;
        }
        alert("Password reset link sent successfully!");
    };

    return(
        <div className="forgot-page">
            <div className="forgot-card">
                <h1>Forgot Password</h1>
                <p className="forgot-subtitle">Enter Your email receive password reset link </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>

                    <input
                         type="email"
                         placeholder="Enter your email"
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <button className="reset-btn">
                    Send Reset Link
                </button>
            </form>

            <p className="back-login">
                <Link to="/login">
                   Back to Login
                </Link>
            </p>
        </div>
    );
}

export default ForgotPassword;