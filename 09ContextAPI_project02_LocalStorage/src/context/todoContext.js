import { createContext, useContext } from "react";

const TodoContext = createContext({
  todos: [],
  setTodos: () => {},
  updateTodo: (id, title) => {},
  markTodoComplete: (id) => {},
  removeTodo: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

const useTodo = () => useContext(TodoContext);

export default useTodo;
