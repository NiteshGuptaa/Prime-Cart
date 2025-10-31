import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name : "wishList",
    initialState:{
        items : []
    },
    reducers : {
        addToWishList : (state, action)=>{
            // state.items.push(action.payload);
            // state.items.push(action.payload);


            const newItem = action.payload;

            // Check if item already exists in the cart
            const existingItem = state.items.find((item) => item.id === newItem.id);

            if (existingItem) {
                // If the item already exists, increase the quantity
                existingItem.quantity += 1;
            } else {
                // If the item doesn't exist, add it with quantity 1
                state.items.push({ ...newItem, quantity: 1 });
            }
        },
        removeFromWishlist : (state, action)=>{
            state.items = state.items.filter((item)=> item.id !== action.payload)
        },
        clearWishList : (state, action)=>{
            state.items = [];
        }
    }
})

export const {addToWishList, removeFromWishlist, clearWishList} = wishlistSlice.actions;
export default wishlistSlice.reducer;