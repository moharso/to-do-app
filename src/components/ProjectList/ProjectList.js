import React from "react";
import "./ProjectList.css";

const ProjectList = () => {
  return (
    <div className="project-list">
      <h1>Projects</h1>
      <ul className="menu">
        <li>
          All
          <ul>
            <li>Home</li>
            <li>Work</li>
            <li>Personal</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ProjectList;
