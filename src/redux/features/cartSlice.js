import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monitor: [],
  cpu: [],
  motherboard: [],
  powerSupply: [],
  ram: [],
  storage: [],
  accessories: [],
  components: 0,
  cart: [],
  total: 0,
  cartTotal: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state[action.payload.product].length === 0) {
        state.components++;
      }
      if (state[action.payload.product].length >= 3) {
        return;
      }
      state[action.payload.product].push(action.payload.details);
      state.total += action.payload.details.price;
    },
    removeOne: (state, action) => {
      if (state[action.payload.product].length === 1) {
        state.components--;
      }
      state[action.payload.product] = state[action.payload.product].filter(
        (product) => product._id !== action.payload.details._id
      );
      state.total -= action.payload.details.price;
    },
    removeAll: (state) => {
      state.cart.push(
        ...state.monitor,
        ...state.cpu,
        ...state.motherboard,
        ...state.ram,
        ...state.powerSupply,
        ...state.storage,
        ...state.accessories
      );
      state.cartTotal = state.total;
      state.cpu = [];
      state.motherboard = [];
      state.monitor = [];
      state.ram = [];
      state.powerSupply = [];
      state.monitor = [];
      state.storage = [];
      state.accessories = [];
      state.components = 0;
      state.total = 0;
    },
  },
});

export const { addToCart, removeOne, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
