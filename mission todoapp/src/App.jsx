import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(4);

  const [todoId, setTodoId] = useState([
    {id:3, text:'공부하기', checked:false},
    {id:2, text:'코딩하기', checked:false},
    {id:1, text:'운동하기', checked:false},

  ]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setTodos([{ text: form.todo.value, checked: false }, ...todos]);
  };

  const removeTodo = (selectedIndex) => {
    const filterTodos = todos.filter((todo, index) => index != selectedIndex);
    setTodos(filterTodos);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="todo" />
        <button type="submit">등록</button>
      </form>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            <input type="checkbox" />
            {i} / {todo.text}
            <button onClick={() => removeTodo(i)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
