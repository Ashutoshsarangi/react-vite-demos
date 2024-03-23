import { addTodo } from "./todoSlice";

export const sendTodoThunk = (todoMessage) => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(addTodo(todoMessage));
    }, 3000);
  };
};
