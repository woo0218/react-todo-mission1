function TodoWriteForm({ addTodo }) {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    addTodo(form.todo.value);
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        name="todo"
        className="border border-gray-300 rounded px-3 py-1 text-sm flex-1"
      />
      <button
        type="submit"
        className="bg-green-400 text-white text-sm px-4 py-1 rounded"
      >
        등록
      </button>
    </form>
  );
}

export default TodoWriteForm;
