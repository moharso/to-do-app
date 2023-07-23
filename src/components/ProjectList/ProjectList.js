import React from "react";
import "./ProjectList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBriefcase, faUser, faList } from "@fortawesome/free-solid-svg-icons";
import logo from "../../logo/logo.png"

const ProjectList = ({ onProjectClick }) => {
  const projectTypes = ["All", "Home", "Work", "Personal"];
  const iconMap = {
    All: faList,
    Home: faHome,
    Work: faBriefcase,
    Personal: faUser,
  };
  return (
    <div className="ProjectListWrapper">
    <div className="ProjectList">
      <h1>Projects</h1>
      <ul className="Menu">
        {projectTypes.map((projectType) => (
          <li
            className={`ProjectList${projectType}`}
            key={projectType}
            onClick={() => onProjectClick(projectType)}
          >
           <FontAwesomeIcon icon={iconMap[projectType]} /> {projectType}
          </li>
        ))}
      </ul>
    </div>
    <img src={logo} alt="To Do App"/>
    </div>
  );
};

export default ProjectList;
