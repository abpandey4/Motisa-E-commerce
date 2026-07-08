import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({email: "",password: "",});
  const [showPassword, setShowPassword] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value,});
  };

  // Validate form
  const validateForm = () => {
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // Password validation
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return false;
    }

    return true;
  };

  // Login button
  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    alert("Login Successful!");

    // Future: API login will go here
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Login to continue shopping
        </p>

        <form onSubmit={handleLogin}>

          {/* Email */}

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}

          <div className="form-group">
            <label>Password</label>

            <div className="password-box">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />

              <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>
          </div>

          {/* Forgot Password */}

          <div className="login-links">
            <Link to="/forgot-password">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}

          <button className="login-btn" type="submit">
            Login
          </button>

        </form>

        {/* Sign Up */}

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/signup">
            Create Account
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;