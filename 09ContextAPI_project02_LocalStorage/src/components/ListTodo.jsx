import useTodo from "../context/todoContext";

const ListTodo = (props) => {
  const { todos } = useTodo();
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            value=""
            checked={todo.isCompleted}
            onChange={(e) => console.log(e.target.checked)}
          />
          {todo.title}
          <button>Edit</button>
          <button>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default ListTodo;
