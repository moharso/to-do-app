import React from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import TodoList from "./components/TodoList/TodoList";

function App() {

  return (
    <div className="App">
      <TopBar placeholder="Search for a task..." />
      <TodoList/>
    </div>
  );
}

export default App;
