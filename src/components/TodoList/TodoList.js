import { useState, useEffect } from "react";
import "./TodoList.css";
import InputForm from "../InputForm/InputForm.js";

const TodoList = ({ search, selectedProject }) => {
  const [todos, setTodos] = useState([]);
  const [isComponentLoaded, setIsComponentLoaded] = useState(false);
  const [remainingItems, setRemainingItems] = useState(0);

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
  }, [todos, isComponentLoaded]);

  if (!isComponentLoaded) {
    return <h2>Loading...</h2>; //add spinner
  }

  //todos array filter
  const filteredTodos = todos.filter((todo) => {
    const matchesSearch =
      !search || todo.input.toLowerCase().includes(search.toLowerCase());
    const matchesProject =
      selectedProject === "All" || todo.type === selectedProject;
    return matchesSearch && matchesProject;
  });
  return (
    <div className="TodoListWrapper">
    <div className="TodoList">
      <h3>REMAINING TASKS: {remainingItems}</h3>
      <h2>What do you have planned?</h2>

      {/* passing filtered Todos list */}
      <InputForm todos={filteredTodos} setTodos={setTodos} />

      <button
        onClick={() => {
          const remainingTodos = todos.filter((todo) => !todo.isChecked);
          setTodos(remainingTodos);
        }}
      >
        DELETE COMPLETED TASKS
      </button>
    </div>
    </div>
  );
};

export default TodoList;
