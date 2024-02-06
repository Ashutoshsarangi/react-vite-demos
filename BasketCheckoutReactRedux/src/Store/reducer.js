import { createReducer } from "@reduxjs/toolkit";
import { addToCart, removeFromCart, updateCart } from "./action";

const initialState = { basket: [] };

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      state.basket.push(action.payload);
    })
    .addCase(removeFromCart, (state, action) => {
      const index = state.basket.findIndex(
        (ele) => ele.sku === action.payload.sku
      );
      state.basket.splice(index, 1);
    })
    .addCase(updateCart, (state, action) => {
      const index = state.basket.findIndex(
        (ele) => ele.sku === action.payload.sku
      );
      state.basket[index].quantity = action.payload.quantity;
    });
  // .addDefaultCase((state, action) => {});
});

export default rootReducer;
