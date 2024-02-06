import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("addToCart");
export const updateCart = createAction("updateCart");
export const removeFromCart = createAction("removeFromCart");
