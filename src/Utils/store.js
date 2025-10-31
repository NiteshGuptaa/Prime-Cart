import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import userSlice from './userSlice';

// Configure the Redux store with slices for cart, wishlist, and user
const store = configureStore({
    reducer: {
        cartSlice: cartSlice,
        wishlistSlice: wishlistSlice,
        userSlice: userSlice,
    }
});

export default store;