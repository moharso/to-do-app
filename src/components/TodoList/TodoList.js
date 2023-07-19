import { useState } from "react";
import "./TodoList.css";
import { useEffect } from "react";
import InputForm from "../InputForm/InputForm";



const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isComponentLoaded, setIsComponentLoaded] = useState(false);
  const [remainingItems, setRemainingItems] = useState(0);
  const [text, setText] = useState({
    input: "",
    isChecked: false,
  });

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

  return (
    <div className="main-section">
      <h3>REMAINING TASKS: {remainingItems}</h3>
     
      <input
        onChange={(event) => setText({ ...text, input: event.target.value })}
        type="text"
      />
      <br />
      <button onClick={handleOnClick}>ADD TASK</button>
     

      <InputForm todos={todos} setTodos={setTodos} />
     
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