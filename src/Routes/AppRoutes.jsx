import {Routes, Route} from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import Cart from "../Pages/Cart/Cart";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Checkout from "../Pages/Checkout/Checkout";
import OrderSuccess from "../Pages/OrderSuccess/OrderSuccess";
import NotFound from "../Pages/NotFound/NotFound";
import Login from "../Pages/Login/Login.jsx";
import Signup from "../Pages/Signup/Signup.jsx";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword.jsx";


function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element = {<Dashboard/>}/>                          {/* for Dashboard */}
            <Route path="/product/:id" element = {<ProductDetail/>}/>           {/*for ProductDetail*/}
            <Route path="/cart" element = {<Cart/>}/>                           {/*for Cart*/}
            <Route path="/wishlist" element = {<Wishlist/>}/>                   {/*for Wishlist*/}
            <Route path="/checkout" element = {<Checkout/>}/>                   {/*for Checkout*/}
            <Route path="/order-success" element={<OrderSuccess/>} />           {/*for OrderSuccess*/}   
            <Route path="/login" element={<Login/>}/>                           {/*for Login Page*/}
            <Route path="/signup" element={<Signup/>}/>                         {/*for signup page */}
            <Route path="/forgot-password" element={<ForgotPassword/>}/>        {/*for Forgot pass page */}
            <Route path="*" element={<NotFound/>}/>                             {/*for Nofound page remeber it should come after all the routes always last */}
            
        </Routes>
    )
}
export default AppRoutes;