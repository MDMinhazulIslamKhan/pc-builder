import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/features/cartSlice.js";
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
