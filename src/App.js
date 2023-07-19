import React from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import ProjectList from "./components/ProjectList/ProjectList";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div>
      <div className="TopBar">
        <TopBar placeholder="Search for a task..." />
      </div>
      <div className="ProjectList">
        <ProjectList />
      </div>
      <div className="TodoList">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
