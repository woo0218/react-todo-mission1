function TodoItem({ item, deleteTodo, toggleTodo }) {
  return (
    <li
      className="flex items-center gap-2 py-2 border-b border-gray-100"
      style={{ textDecoration: item.completed ? "line-through" : "none" }}
    >
      <input
        type="checkbox"
        onChange={() => toggleTodo(item.id)}
        checked={item.completed}
      />
      <span className="flex-1 text-sm text-gray-700">
        {item.id} / {item.todo}
      </span>
      <button
        onClick={() => deleteTodo(item.id)}
        className="text-gray-300 text-xs hover:text-red-400"
      >
        X
      </button>
    </li>
  );
}

export default TodoItem;
