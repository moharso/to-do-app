import React, { useState } from "react";
import "./InputForm.css";

const InputForm = ({ todos, setTodos }) => {
  const [text, setText] = useState({
    input: "",
    isChecked: false,
    type: "Home",
  });

  const [editMode, setEditMode] = useState({});

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

    // Clear the input text after submitting
    setText((prevState) => ({
      ...prevState,
      input: "",
    }));
  };

  const handleEditTodo = (index) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [index]: true,
    }));
  };

  const handleSaveTodo = (index) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [index]: false,
    }));
  };

  const handleDeleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((todo, i) => i !== index));
  };

  return (
    <div className="InputForm">
      <form onSubmit={handleFormSubmit}>
        <input
        className="AddTaskInput"
          type="text"
          name="todo"
          placeholder="+ Add your task"
          value={text.input}
          onChange={(e) =>
            setText((prevState) => ({ ...prevState, input: e.target.value }))
          }
        />
        <label className="HomeCheckbox">
          <input
            type="radio"
            name="type"
            value="Home"
            checked={text.type === "Home"}
            onChange={handleTypeChange}
          />
          Home
        </label>
        <label className="WorkCheckbox">
          <input
            type="radio"
            name="type"
            value="Work"
            checked={text.type === "Work"}
            onChange={handleTypeChange}
          />
          Work
        </label>
        <label PersonalCheckbox>
          <input
            type="radio"
            name="type"
            value="Personal"
            checked={text.type === "Personal"}
            onChange={handleTypeChange}
          />
          Personal
        </label>
        <button className="AddTaskButton" type="submit">ADD TASK</button>
      </form>
      <div className="Todos">
      <ul>
        {todos.map((todo, index) => (
          <div className="todoListItem" key={index}>
            
            {editMode[index] ? (
              <input
                type="text"
                value={todo.input}
                onChange={(e) =>
                  setTodos((prevTodos) =>
                    prevTodos.map((t, i) =>
                      i === index ? { ...t, input: e.target.value } : t
                    )
                  )
                }
              />
            ) : (
            <li
              style={{ textDecoration: todo.isChecked ? "line-through" : "" }}
            >
              {todo.input} - {todo.type}
            </li>
            )}
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

            {editMode[index] ? (
              <button className="SaveButton" onClick={() => handleSaveTodo(index)}>SAVE</button>
            ) : (
              <button className="EditButton" onClick={() => handleEditTodo(index)}>EDIT</button>
            )}
            <button className="DeleteButton" onClick={() => handleDeleteTodo(index)}>DELETE</button>
          </div>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default InputForm;
