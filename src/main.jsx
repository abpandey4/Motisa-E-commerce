import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import WishlistProvider from './Context/WishlistContext'
import CartProvider from './Context/CartContext'
import SearchProvider from './Context/SearchContext'

createRoot(document.getElementById('root')).render(

  <SearchProvider>
    <BrowserRouter>
     <CartProvider>
       <WishlistProvider>
         <App /> 
     </WishlistProvider> 
    </CartProvider>
  </BrowserRouter>
</SearchProvider>
  
);
