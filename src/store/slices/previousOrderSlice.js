import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  previousOrders: [],
};

const previousOrdersSlice = createSlice({
  name: "previousOrders",
  initialState,
  reducers: {
    setPreviousOrders: (state, action) => {
      state.previousOrders = action.payload.previousOrders;
    },
  },
});

export const { setPreviousOrders } = previousOrdersSlice.actions;
export const previousOrdersSelector = (state) => state.previousOrders;
export default previousOrdersSlice.reducer;
