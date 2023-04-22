import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/productsSlice";
import previousOrdersReducer from "./slices/previousOrderSlice";

export const store = configureStore({
  reducer: {
    itemsInCart: cartReducer,
    products: productsReducer,
    previousOrders: previousOrdersReducer,
  },
});
