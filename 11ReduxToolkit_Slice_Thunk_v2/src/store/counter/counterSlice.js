import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload.myValue;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementByAmountAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount({ myValue: amount }));
  }, 2000);
};

export default counterSlice.reducer;
