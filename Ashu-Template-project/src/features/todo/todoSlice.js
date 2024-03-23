import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      state.push(action.payload.data);
    },
    updateTodo: (state, action) => {},
    deleteTodo: (state, action) => {},
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
