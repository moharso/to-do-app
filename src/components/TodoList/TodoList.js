import { useState, useEffect } from "react";
import "./TodoList.css";
import { InputForm } from "../../reusableComponents/reusableComponents";

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
    <div>
      <h3>REMAINING TASKS: {remainingItems}</h3>

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
  );
};

export default TodoList;
