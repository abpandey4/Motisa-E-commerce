import { useState, useEffect } from "react";
import { useContext } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard"
import Pagination from "../../Components/Pagination/Pagination";
import { SearchContext } from "../../Context/SearchContext";
import Loader from "../../Components/Loader/Loader";
import "./Dashboard.css";

function Dashboard(){
    const[products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const { searchTerm } = useContext(SearchContext);
    const [loading, setLoading] = useState(true);
    const productsPerPage = 4;

    // Calculate last and first Index

    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;

    // Filter Products

    const filteredProducts = products.filter((product)=>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()))

    // Products of current Page

    const currentProducts = filteredProducts.slice(firstProductIndex, lastProductIndex);

    useEffect(() => {

        
        fetch("https://fakestoreapi.com/products")
             .then((response) => response.json())
             .then((data) => {
                setProducts(data.slice(0 , 20));
                setLoading(false);
             })
             .catch((err) => {
                console.log(err);
                setLoading(false)})         
    },[]);

    // Reset to 1st page whenever search changes

    useEffect(()=>{
        setCurrentPage(1);
    },[searchTerm]);

    if(loading){
        return <Loader/>
    }


    return(
        <div className="dashboard">

            {/* Hero Section */}

            <section className="hero-section">
                <div className="hero-content">
                    <h1>Discover Premium Shopping</h1>

                    <p> 
                        Explore the latest collection with elegant design,
                        premium quality, and unbeatable prices.
                    </p>
                    <button className="shop-btn">Shop Now</button>
                </div>
            </section>

            {/* Product section */}

            <section className="product-section">
                <h2 className="section-title">Featured Products</h2>
                <div className="products-grid">

                    {/* Products Card will come here later */}

                    {currentProducts.length>0 ?(       // for no products found 
                        currentProducts.map((product) =>(
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))):(
                        <div className="no-products">
                            <h2>No Products Found 😔</h2>
                            <p>Try Searching with another Keyword</p>
                        </div>    
                    )
                }
                </div>

                {searchTerm.trim()==="" && (
                    <Pagination
                        currentPage={currentPage}
                        totalProducts={filteredProducts.length}
                        productsPerPage={productsPerPage}
                        setCurrentPage={setCurrentPage} 
                    />   
                )}     
            </section>
        </div>
    )
};
export default Dashboard;

