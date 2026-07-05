import { useContext, useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { CartContext } from "../../Context/CartContext";

function ProductDetail(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(CartContext); 

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
           .then((response) => response.json())
           .then((data)=> setProduct(data))
           .catch((err)=> console.log(err));
    },[id]);

    if(!product){
        return <h2>Loading.....</h2>
    }

    return(
        <div className="product-detail">

                {/*product-Image*/}
            <div className="product-image">
                <img src = {product.image} alt = {product.title}  />
            </div>

                {/*Product-info*/}

                <div className="product-info">

                    <h1>{product.title}</h1>

                    <p className="product-category">{product.category}</p>

                    <h2 className="product-price">${product.price}</h2>

                    <div className="rating">
                        ⭐{product.rating.rate}
                        <span>({product.rating.count} Reviews)</span>
                    </div>

                    <p className="product-description">
                        {product.description}
                    </p>

                    <button className="add-cart-btn" onClick={()=> addToCart(product)}>
                        Add to Cart
                    </button>

                </div>
            </div> 
    );
};
export default ProductDetail;
