function TodoList({ todos, removeTodo, toggletodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            onChange={() => {
              toggletodo(todo.id);
            }}
            checked={todo.checked}
          />
          {JSON.stringify(todo.checked)} / {todo.id} / {todo.text}
          <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
