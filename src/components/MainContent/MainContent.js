import React from "react";
import TodoList from "../TodoList/TodoList";
import { ProjectList } from "../../reusableComponents/reusableComponents";

import "./MainContent.css";

const MainContent = ({ search, selectedProject, onProjectClick }) => {
  return (
    <>
      {/* rendering ProjectList with props */}
      <ProjectList
        selectedProject={selectedProject}
        onProjectClick={onProjectClick}
      />
      {/* rendering TodoList with props */}
      <TodoList search={search} selectedProject={selectedProject} />
    </>
  );
};

export default MainContent;
