import { useState, useEffect } from "react";
import "./TodoList.css";
import InputForm from "../InputForm/InputForm";
import TopBar from "../TopBar/TopBar";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isComponentLoaded, setIsComponentLoaded] = useState(false);
  const [remainingItems, setRemainingItems] = useState(0);
  const [text, setText] = useState({
    input: "",
    isChecked: false,
  });

  // new state variable for search term
  const [search, setSearch] = useState("");
  const handleSearch = (term) => {
    setSearch(term);
  };

  const handleOnClick = () => {
    setTodos([...todos, text]);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    if (storedTodos) {
      setTodos(storedTodos);
    }
    setIsComponentLoaded(true);
  }, []);

  useEffect(() => {
    isComponentLoaded && localStorage.setItem("todos", JSON.stringify(todos));
    const remainingTodos = todos.filter((todo) => !todo.isChecked).length;

    setRemainingItems(remainingTodos);
  }, [text.isChecked, todos, isComponentLoaded]);

  if (!isComponentLoaded) {
    <h2>Loading...</h2>;
  }

  //todos array filter
  const filteredTodos = todos.filter(
    (todo) =>
      todo.input && todo.input.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h3>REMAINING TASKS: {remainingItems}</h3>

      <input
        onChange={(event) => setText({ ...text, input: event.target.value })}
        type="text"
      />
      <br />
      <button onClick={handleOnClick}>ADD TASK</button>

      {/* rendering TopBar with props */}
      <TopBar
        placeholder="Search for a task"
        data={filteredTodos}
        onSearch={handleSearch}
      />
      {/* passing filtered Todos list */}
      <InputForm todos={filteredTodos} setTodos={setTodos} />

      <button
        onClick={() => {
          const remainingTodos = todos.filter((todo) => !todo.isChecked);
          setTodos(remainingTodos);
        }}
      >
        CLEAR LIST
      </button>
    </div>
  );
};

export default TodoList;
