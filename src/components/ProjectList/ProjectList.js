import React, { useContext } from "react";
import "./ProjectList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faUser,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../logo/logo.png";
import { ThemeContext } from "../../context/ThemeContext";
import { ProjectListStyles } from "../../constants/index.ts";

const projectTypes = ["All", "Home", "Work", "Personal"];

const iconMap = {
  All: faList,
  Home: faHome,
  Work: faBriefcase,
  Personal: faUser,
};

const ProjectList = ({ onProjectClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="ProjectListWrapper" style={{ ...ProjectListStyles[theme] }}>
      <div className="ImgWrapper">
        <img src={logo} alt="To Do App" />
      </div>
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
    </div>
  );
};

export default ProjectList;
