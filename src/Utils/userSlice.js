import { createSlice } from "@reduxjs/toolkit";

// Initial state with user data from localStorage
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Add user to state and localStorage
    addUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    // Remove user from state and localStorage
    removeUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
