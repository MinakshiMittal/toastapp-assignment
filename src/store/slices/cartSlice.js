import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsInCart: [],
};

const cartSlice = createSlice({
  name: "currentOrder",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.itemsInCart = action.payload;
    },
    increaseQuantity: (state, action) => {
      state.itemsInCart = state.itemsInCart.map((item) => {
        if (item.id === action.payload.item.id) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
    },
    removeFromCart: (state, action) => {
      state.itemsInCart = action.payload;
    },
    decreaseQuantity: (state, action) => {
      state.itemsInCart = state.itemsInCart.map((item) => {
        if (item.id === action.payload.item.id) {
          item.quantity = item.quantity - 1;
        }
        return item;
      });
    },
    placeOrder: (state) => {
      state.itemsInCart = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  placeOrder,
  removeFromCart,
} = cartSlice.actions;
export const cartSelector = (state) => state.itemsInCart;
export default cartSlice.reducer;
