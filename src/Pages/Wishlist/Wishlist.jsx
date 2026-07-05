import "./Wishlist.css";
import { useContext } from "react";
import { WishlistContext } from "../../Context/WishlistContext";
import { FaHeart, FaStar } from "react-icons/fa";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

if (wishlist.length === 0) {
  return (
    
    <div className="wishlist-empty">
      <FaHeart className="empty-heart" />
      <h2>Your Wishlist is empty</h2>
      <p>Add Products to Your Wishlist</p>
    </div>
  );
}

return (
  <div className="wishlist-page">
    <h1 className="wishlist-heading">My Wishlist({wishlist.length})</h1>

    <div className="wishlist-grid">
      {wishlist.map((product) => (
        <div className="wishlist-card" key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            className="wishlist-image"
          />

          <div className="wishlist-info">
            <h3>{product.title}</h3>

            <div className="wishlist-rating">
                <FaStar className="star"/>
                {product.rating?.rate}
            </div>

            <h2>$ {product.price}</h2>

            <button 
                className="remove-btn" 
                onClick={()=> removeFromWishlist(product.id)}
            >
                Remove
            </button>

          </div>
        </div>
      ))}
    </div>
  </div>
);
}
export default Wishlist;
