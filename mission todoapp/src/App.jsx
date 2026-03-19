import { useRef, useState } from "react";
import TodoList from "./components/TodoList";
import TodoWriteForm from "./components/TodoWriteForm";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, todo: "할일1", completed: true },
    { id: 2, todo: "할일2", completed: false },
    { id: 3, todo: "할일3", completed: false },
  ]);

  let lastId = useRef(4);

  const addTodo = (todo) => {
    const todoItem = { id: lastId.current, todo, completed: false };
    setTodos([...todos, todoItem]);
    lastId.current++;
  };

  const deleteTodo = (selectedId) => {
    const nextState = todos.filter((item) => item.id !== selectedId);
    setTodos(nextState);
  };

  const toggleTodo = (selectedId) => {
    const nextState = todos.map((item) =>
      item.id == selectedId ? { ...item, completed: !item.completed } : item,
    );
    setTodos(nextState);
  };

  // 날짜 삽입해보기
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  // 프로그래스바 만들어보기
  const completedCount = todos.filter((t) => t.completed).length;
  const total = todos.length;
  const progress = total === 0 ? 0 : Math.round((completedCount / total) * 100);

  return (
    <div className="max-w-md mx-auto mt-16 px-4">
      <p className="text-gray-400 text-sm mb-1">{dateString}</p>
      <div className="bg-gray-200 rounded-full h-2 mb-1">
        <div
          className="bg-green-400 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-gray-400 text-xs mb-6">
        {completedCount} / {total} 완료
      </p>

      <TodoWriteForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
