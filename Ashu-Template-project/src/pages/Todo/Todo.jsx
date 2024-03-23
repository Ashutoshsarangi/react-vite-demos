import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getTodoList } from "../../features/todo/todo.selector";
import { sendTodoThunk } from "../../features/todo/todo.actions";

const Todo = ({ myTodolists }) => {
  const dispatch = useDispatch();
  //   const todoLists = useSelector((state) => state.todo);
  const [todo, setTodo] = useState();

  const addTodoHandler = () => {
    dispatch(
      sendTodoThunk({
        data: {
          name: todo,
          isCompleted: false,
          id: Math.floor(Math.random() * 100),
        },
      })
    );
    setTodo("");
  };

  return (
    <>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={addTodoHandler}>Add Todo</button>
      <div>
        <hr></hr>
        <h1>List Of todos</h1>
        <ul>
          {myTodolists.map((todo) => (
            <li key={todo.id}>{todo.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default connect((state) => ({
  myTodolists: getTodoList(state),
}))(Todo);
