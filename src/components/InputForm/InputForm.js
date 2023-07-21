import React, { useState } from "react";
import "./InputForm.css";

const InputForm = ({ todos, setTodos }) => {
  const [text, setText] = useState({
    input: "",
    isChecked: false,
    type: "Home",
  });

  const handleTypeChange = (event) => {
    setText((prevState) => ({
      ...prevState,
      type: event.target.value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      input: event.target.todo.value,
      isChecked: false,
      type: text.type,
    };

    setTodos([...todos, newTodo]);

    setText({
      input: "",
      isChecked: false,
      type: "Home",
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="todo" placeholder="Enter your task" />
        <label>
          <input
            type="radio"
            name="type"
            value="Home"
            checked={text.type === "Home"}
            onChange={handleTypeChange}
          />
          Home
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="Work"
            checked={text.type === "Work"}
            onChange={handleTypeChange}
          />
          Work
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="Personal"
            checked={text.type === "Personal"}
            onChange={handleTypeChange}
          />
          Personal
        </label>
        <br />
        <button type="submit">ADD TASK</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <div className="todoListItem" key={index}>
            <li
              style={{ textDecoration: todo.isChecked ? "line-through" : "" }}
            >
              {todo.input} - {todo.type}
            </li>
            <input
              onClick={() => {
                setTodos((prevTodos) => {
                  return prevTodos.map((t, i) =>
                    i === index ? { ...t, isChecked: !t.isChecked } : t
                  );
                });
              }}
              type="checkbox"
              checked={todo.isChecked}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default InputForm;
