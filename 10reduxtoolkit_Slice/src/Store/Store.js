import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./Features/todoSlice";

const Store = configureStore({
  reducer: todoSliceReducer,
});

export default Store;
