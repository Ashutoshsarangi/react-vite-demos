import { createContext, useContext } from "react";

const TodoContext = createContext({
  todos: [],
  setTodos: () => {},
});

export const TodoContextProvider = TodoContext.Provider;

const useTodo = () => useContext(TodoContext);

export default useTodo;
