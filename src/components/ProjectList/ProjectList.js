import React from "react";
import "./ProjectList.css";

const ProjectList = ({ selectedProject, onProjectClick }) => {
  const projectTypes = ["All", "Home", "Work", "Personal"];
  return (
    <div className="project-list">
      <h1>Projects</h1>
      <ul className="menu">
        {projectTypes.map((projectType) => (
          <li
            key={projectType}
            onClick={() => onProjectClick(projectType)}
            className={selectedProject === projectType ? "selected" : ""}
          >
            {projectType}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
