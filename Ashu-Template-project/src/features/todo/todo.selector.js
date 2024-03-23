import { createSelector } from "@reduxjs/toolkit";

export const getTodoList = createSelector(
  (state) => state.todo,
  (todo) => {
    console.log("I am inside");
    return todo.map((item) => ({ ...item, name: `${item.name} ---> Ashu` }));
  }
);
