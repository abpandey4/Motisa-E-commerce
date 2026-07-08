import Header from "./Components/Header/Header"
import AppRoutes from "./Routes/AppRoutes";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login"


function App() {
     return(
         <>
           <Header/>
           <AppRoutes/> 
           <Footer/>           
        </>
    );   
};
export default App;
