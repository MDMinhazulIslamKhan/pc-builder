import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monitor: [],
  cpu: [],
  motherboard: [],
  powerSupply: [],
  ram: [],
  storage: [],
  accessories: [],
  total: 0,
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
      state.total += action.payload.details.price;
    },
    removeOne: (state, action) => {
      state[action.payload.product] = state[action.payload.product].filter(
        (product) => product._id !== action.payload.details._id
      );
      state.total -= action.payload.details.price;
    },
  },
});

export const { addToCart, removeOne } = cartSlice.actions;
export default cartSlice.reducer;
