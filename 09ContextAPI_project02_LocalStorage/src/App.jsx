import { useState, useEffect } from "react";
import { AddTodo, ListTodo } from "./components";
import { TodoContextProvider } from "./context/todoContext";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todosFromStorage = JSON.parse(localStorage.getItem("Todos"));
    console.log(todosFromStorage, "From Local storage");
    setTodos(todosFromStorage);
  }, []);

  useEffect(() => {
    // console.log("inside set ---> ", todos);
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  const updateTodo = (id, title) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title };
      }
      return todo;
    });

    setTodos(updatedTodo);
  };

  const markTodoComplete = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <TodoContextProvider
      value={{ todos, setTodos, updateTodo, markTodoComplete, removeTodo }}
    >
      <div className="m-5 p-5">
        <AddTodo />
        <hr></hr>
        <ul>
          {todos.map((todo) => {
            return <ListTodo key={todo.id} todo={todo} />;
          })}
        </ul>
      </div>
    </TodoContextProvider>
  );
}

export default App;
