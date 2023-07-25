import { useState, useEffect, useContext } from "react";
import "./TodoList.css";
import InputForm from "../InputForm/InputForm.js";
import { ThemeContext } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { TodoListStyles } from "../../constants/index.ts";

const TodoList = ({ search, selectedProject }) => {
  const [todos, setTodos] = useState([]);
  const [isComponentLoaded, setIsComponentLoaded] = useState(false);
  const [remainingItems, setRemainingItems] = useState(0);

  const { theme } = useContext(ThemeContext);

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
    return <FontAwesomeIcon icon={faCircleNotch} spin />;
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
    <div className="TodoListWrapper" style={{ ...TodoListStyles[theme] }}>
      <div className="TodoList">
        <div>
          <h4>REMAINING TASKS: {remainingItems}</h4>
          <h2>What do you have planned?</h2>
        </div>
        <InputForm todos={filteredTodos} setTodos={setTodos} />
        <div className="DeleteAllButtonWrapper">
          <button
            className="DeleteAll"
            onClick={() => {
              const remainingTodos = todos.filter((todo) => !todo.isChecked);
              setTodos(remainingTodos);
            }}
          >
            DELETE COMPLETED TASKS
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
