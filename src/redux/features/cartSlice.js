import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monitor: [],
  cpu: [],
  motherboard: [],
  powerSupply: [],
  ram: [],
  storage: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state[action.payload.product].length >= 3) {
        return;
      }
      state[action.payload.product].push(action.payload.details);
    },
    removeOne: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }
      state.total -= action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity;
    },
  },
});

export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;
export default cartSlice.reducer;
