import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound(){
    return(
        <div className="notfound-page"> 
            <h1>404 Not Found</h1>

            <h2>Page Not Found</h2>

            <p> Sorry, the Page you are looking for does'nt exist.</p>

            <Link to="/" className="home-btn">
                 Go Back Home
            </Link>

        </div>
    )
}

export default NotFound;