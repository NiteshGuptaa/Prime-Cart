import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItemToCart: (state, action) => {
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

            // state.items.push(action.payload);
        },
        updateItemQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem && quantity !== 0) {
                existingItem.quantity += quantity;
                if (existingItem.quantity <= 0) {
                    state.items = state.items.filter((item) => item.id !== id);
                }
            }
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        clearCart: (state, action) => {
            state.items = [];
        }
    }
})

export const { addItemToCart,updateItemQuantity,  removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;