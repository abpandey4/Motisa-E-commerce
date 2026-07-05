import {Routes, Route} from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import Cart from "../Pages/Cart/Cart";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Checkout from "../Pages/Checkout/Checkout";
import OrderSuccess from "../Pages/OrderSuccess/OrderSuccess";
import NotFound from "../Pages/NotFound/NotFound";

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element = {<Dashboard/>}/>                          {/* for Dashboard */}
            <Route path="/product/:id" element = {<ProductDetail/>}/>           {/*for ProductDetail*/}
            <Route path="/cart" element = {<Cart/>}/>                           {/*for Cart*/}
            <Route path="/wishlist" element = {<Wishlist/>}/>                   {/*for Wishlist*/}
            <Route path="/checkout" element = {<Checkout/>}/>                   {/*for Checkout*/}
            <Route path="/order-success" element={<OrderSuccess/>} />           {/*for OrderSuccess*/}   
            <Route path="*" element={<NotFound/>}/>                             {/*for Nofound page remeber it should come after all the routes always last */}
        </Routes>
    )
}
export default AppRoutes;