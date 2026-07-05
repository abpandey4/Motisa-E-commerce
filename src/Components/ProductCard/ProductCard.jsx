import "./ProductCard.css";
import { FaStar, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {WishlistContext} from "../../Context/WishlistContext";
import { CartContext } from "../../Context/CartContext";

function ProductCard({ product }) {            // Props

  const{addToWishlist, removeFromWishlist, isInWishlist} = useContext(WishlistContext);
  const wishlisted = isInWishlist(product.id);

  const { addToCart } = useContext(CartContext);
 
  return (
        
      <div className="product-card">

        {/* Wishlist Button*/}

        <button className="wishlist-btn" onClick = {()=>{
         
          if(wishlisted){
            removeFromWishlist(product.id);
          }else{
            addToWishlist(product);
          }
        }}>

          <FaHeart style={{color: wishlisted ? "red" : "#bbb"}} />

        </button>


        <Link to={`/product/${product.id}`} className="product-link">

        {/* Product Image */}

        <div className="product-img">
          <img src={product.image} alt={product.title} />
        </div>

        {/* Product Info */}
        <div className="product-info">

          <h3 className="product-title">
            {product.title.length > 40
              ? product.title.substring(0, 40) + "..."
              : product.title}
          </h3>

          <div className="product-rating">
            <FaStar className="star-icon" />
            <span>{product.rating?.rate}</span>{" "}

            {/* ? we have given so that if rating exist gets rate....otherwise dont crash */}

          </div>

          <h2 className="product-price">${product.price}</h2>

        </div>
         </Link>

         {/* Add to cart */}
         <button className="cart-btn" onClick={()=> addToCart(product)}>
           Add to Cart 
         </button>
      </div>
   
  );
}
export default ProductCard;
