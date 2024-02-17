import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Store/Features/todoSlice";

const Todo = (props) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo({ id: todo.id }))}>
              Delete
            </button>
            <button onClick={() => props.updateTodoFun(todo)}>Update</button>
          </li>
        );
      })}
    </div>
  );
};

export default Todo;
