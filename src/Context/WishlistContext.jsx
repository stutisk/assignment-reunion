import { WishlistReducer } from "./WishlistReducer";
import {createContext,useReducer,useContext } from "react";


const Wishlistcontext=createContext();

const useWishlist = () => useContext(Wishlistcontext);

const WishlistProvider = ({children}) => {
 const [state,dispatch] = useReducer( WishlistReducer,{wishlist:[]});

  return (
    <Wishlistcontext.Provider value={{state,dispatch}}>
      {children}
    </Wishlistcontext.Provider>
  );
};

export  {WishlistProvider,useWishlist};