import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">

                {/* brand Section */}
                <div className="footer-brand">
                    <h2>Motisa</h2>
                    <p> Premium shopping experience built with React.js.</p>   
                </div>

                {/* Quick Links */}

                <div className="footer-links">
                    <h3>Quick Links</h3>

                    <Link to= "/">Home</Link>
                    <Link to= "/wishlist">Wishlist</Link>
                    <Link to="/cart">Cart</Link>
                </div>

                {/* Customer Section */}
                <div className="footer-links">
                    <h3>Customer Service</h3>

                    <a href="#">Contact</a>
                    <a href="#">FAQ</a>
                    <a href="#">Privacy Policy</a>
                </div>

                {/* Social Icons */}

                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">

                        <a href="#"><FaFacebook/></a>
                        <a href="#"><FaInstagram/></a>
                        <a href="#"><FaLinkedin/></a>
                        <a href="#"><FaGithub/></a>
                    </div>
                </div>
            </div>

            {/* Bottom */}

            <div className="footer-btm">
                <p>© 2026 Motisa. All Rights Reserved.</p>
            </div>
            
        </footer>
    )
}

export default Footer;