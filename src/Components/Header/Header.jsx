import React from "react";
import { useContext } from "react";
import { WishlistContext } from "../../Context/WishlistContext";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "./Header.css";
import{FaSearch, FaHeart, FaShoppingCart} from "react-icons/fa";
import { SearchContext } from "../../Context/SearchContext";

function Header(){

    const { wishlist } = useContext(WishlistContext);
    const { totalItems } = useContext(CartContext);
    const {searchTerm, setSearchTerm} = useContext(SearchContext);

    return(
        <header className="header">
                 
                 {/* Top row*/}

            <div className="header-top">
                <div className="Logo">
                    <h1>Motisa</h1>
                </div>

                <button className="Login-btn">Login</button>
            </div>

                 {/* Bottom Row*/}

            <div className="header-bottom">

                {/*Search bar*/}
                <div className="search-box">
                    <FaSearch className="search-icon"/>

                    <input
                       type="text"
                       placeholder="Search products..."
                       value={searchTerm}
                       onChange={(e)=> setSearchTerm(e.target.value)}
                    />
                </div>

                {/*Wishlist & Cart*/}

                <div className="header-icons">

                    <Link to = "/wishlist" className= "icon-btn">
                        <FaHeart/>
                        <span className="count">
                            {wishlist.length}
                        </span>
                    </Link>

                    <Link to="/cart" className="Shopping-cart">
                        <FaShoppingCart/>
                        <span className="count">{totalItems}</span>
                    </Link>

                </div>
            </div>
        </header>
    );
}
export default Header;