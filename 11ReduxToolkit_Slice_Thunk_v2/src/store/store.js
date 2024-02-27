import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
  },
});

export default store;
