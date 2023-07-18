import React from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import ProjectList from "./components/ProjectList/ProjectList";

function App() {
  return (
    <div>
      <div className="TopBar">
        <TopBar placeholder="Search for a task..." />
      </div>
      <div className="ProjectList">
        <ProjectList />
      </div>
    </div>
  );
}

export default App;
