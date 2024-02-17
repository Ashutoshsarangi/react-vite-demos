import { useState } from "react";
import { useDispatch } from "react-redux";
import Todo from "./Todo";
import { addTodo, updateTodo } from "../Store/Features/todoSlice";

const AddTodo = (props) => {
  const [input, setInput] = useState("");
  const [updateTodoId, setUpdateTodoId] = useState("");
  const dispatch = useDispatch();

  const addTodBtnClick = () => {
    if (updateTodoId) {
      dispatch(updateTodo({ id: updateTodoId, text: input }));
      setUpdateTodoId("");
    } else {
      dispatch(addTodo({ text: input }));
    }
    setInput("");
  };

  const updateTodoFun = (todo) => {
    setUpdateTodoId(todo.id);
    setInput(todo.text);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodBtnClick}>
          {updateTodoId ? "Updat" : "Add Todo"}
        </button>
      </div>
      <Todo updateTodoFun={(todo) => updateTodoFun(todo)} />
    </>
  );
};

export default AddTodo;
