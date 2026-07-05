import { createContext, useState } from "react";

// Create Context    : it creates global wishlist that every component in your app can access

export const WishlistContext = createContext();   // export used because we will be using this context in many files

//Provider Component 

function WishlistProvider({children}){
    const [wishlist, setWishlist] = useState([]);


// Add Product

const addToWishlist = (product)=>{
    setWishlist((prevWishlist) => [...prevWishlist, product]);
}

// Remove Product

const removeFromWishlist = (id) =>{
    setWishlist((prevWishlist) =>prevWishlist.filter((item) => item.id !==id));
};

// Check if product Exists

const isInWishlist = (id)=>{
    return wishlist.some((item) => item.id === id)
}

return(
    <WishlistContext.Provider
        value={{wishlist,
                addToWishlist,
                removeFromWishlist,
                isInWishlist
        }}
    >
        {children}       
    </WishlistContext.Provider>
)
}
export default WishlistProvider;