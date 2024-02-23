import { useState } from "react";
import useTodo from "../context/todoContext";

const ListTodo = ({ todo }) => {
  const { todos, updateTodo, markTodoComplete, removeTodo } = useTodo();
  const [updateFlag, setUpdateFlag] = useState(false);
  const [todoCompleted, setTodoCompleted] = useState(todo.isCompleted);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);

  const [rowId, setRowId] = useState();

  const editHandler = (todoId) => {
    setUpdateFlag(!updateFlag);
    updateTodo(todoId, updatedTitle);
  };

  const handleTodoCompleted = (todoId) => {
    setTodoCompleted(!todoCompleted);
    markTodoComplete(todoId);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => handleTodoCompleted(todo.id)}
      />
      <input
        type="text"
        value={updatedTitle}
        className={`m-[10px] p-[5px] outline-none ${
          !updateFlag ? "border-transparent" : "border-[1px]"
        } ${todoCompleted ? "line-through" : ""}`}
        onChange={(e) => setUpdatedTitle(e.target.value)}
        readOnly={!updateFlag}
      />
      <button onClick={() => editHandler(todo.id)} className="ml-3">
        {!updateFlag ? "Edit" : "Save"}
      </button>
      <button className="ml-3" onClick={() => removeTodo(todo.id)}>
        Remove
      </button>
    </li>
  );
};

export default ListTodo;
