import React, { useState } from "react";
import "./InputForm.css";
import { faPenFancy, faTrash, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

    if (text.input.trim().length < 3) {
      alert("Task must be at least 3 characters long.");
      return;
    }

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
          <span className="HomeSpan">Home</span>
        </label>
        <label className="WorkCheckbox">
          <input
            type="radio"
            name="type"
            value="Work"
            checked={text.type === "Work"}
            onChange={handleTypeChange}
          />
          <span className="WorkSpan">Work</span>
        </label>
        <label className="PersonalCheckbox">
          <input
            type="radio"
            name="type"
            value="Personal"
            checked={text.type === "Personal"}
            onChange={handleTypeChange}
          />
          <span className="PersonalSpan">Personal</span>
        </label>
        <div className="AddTaskButtonWrapper">
        <button className="AddTaskButton" type="submit">ADD TASK</button>
        </div>
      </form>
      <div className="Todos">
      <ul>
        {todos.map((todo, index) => (
          <div className="todoListItem" key={index}>
            <input
            className={`TodosCheckbox${todo.type}`}
              onClick={() => {
                setTodos((prevTodos) => {
                  return prevTodos.map((t, i) =>
                    i === index ? { ...t, isChecked: !t.isChecked } : t
                  );
                });
              }}
              type="radio"
              checked={todo.isChecked}
            />
            {editMode[index] ? (
              <input
              className={`Edit${todo.type}`}
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
              className={todo.type}
            >
              {todo.input}
            </li>
            )}
            

            {editMode[index] ? (
              <button className="SaveButton" onClick={() => handleSaveTodo(index)}><FontAwesomeIcon icon={faFloppyDisk} style={{color: "#22511f",}} /></button>
            ) : (
              <button className="EditButton" onClick={() => handleEditTodo(index)}>
                <FontAwesomeIcon icon={faPenFancy} style={{"--fa-primary-color": "#b7781f", "--fa-secondary-color": "#b7781f",}} />
                </button>
            )}
            <button className="DeleteButton" onClick={() => handleDeleteTodo(index)}><FontAwesomeIcon icon={faTrash} style={{"--fa-primary-color": "#005f61", "--fa-secondary-color": "#005f61",}} /></button>
          </div>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default InputForm;
