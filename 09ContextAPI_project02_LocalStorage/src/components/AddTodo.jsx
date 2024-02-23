import { useState } from "react";
import useTodo from "../context/todoContext";

const AddTodo = (props) => {
  const [todo, setTodo] = useState("");
  const { todos, setTodos } = useTodo();
  const addTodo = () => {
    console.log("Add todo clicked", todo);
    setTodos([...todos, { id: Date.now(), isCompleted: false, title: todo }]);
    setTodo("");
  };

  return (
    <>
      <input
        type="text"
        value={todo}
        className={`m-[10px] p-[5px] border-[1px]`}
        placeholder="Add Todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </>
  );
};

export default AddTodo;
