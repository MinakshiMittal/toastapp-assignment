import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "productsList",
  initialState,
  reducers: {
    fetchProducts: (state, action) => {
      state.products = action.payload.products;
    },
  },
});

export const { fetchProducts } = productsSlice.actions;
export const productsSelector = (state) => state.products;
export default productsSlice.reducer;
