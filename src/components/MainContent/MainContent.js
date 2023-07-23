import React from "react";
import TodoList from "../TodoList/TodoList";
import ProjectList from "../ProjectList/ProjectList.js";

import "./MainContent.css";

const MainContent = ({ search, selectedProject, onProjectClick }) => {
  return (
    <>
      {/* rendering ProjectList with props */}
      <ProjectList className="ProjectListWrapper"
        selectedProject={selectedProject}
        onProjectClick={onProjectClick}
      />
      {/* rendering TodoList with props */}
      <TodoList className="TodoListWrapper gradient-animation" search={search} selectedProject={selectedProject} />
    </>
  );
};

export default MainContent;
