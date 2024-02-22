import { useState } from "react";
import { AddTodo, ListTodo } from "./components";
import { TodoContextProvider } from "./context/todoContext";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: "adsdas",
      title: "Hello Todo",
      isCompleted: false,
    },
    {
      id: "adsdaasds",
      title: "Hello Todo1",
      isCompleted: true,
    },
  ]);
  return (
    <TodoContextProvider value={{ todos, setTodos }}>
      <AddTodo />
      <ListTodo />
    </TodoContextProvider>
  );
}

export default App;
