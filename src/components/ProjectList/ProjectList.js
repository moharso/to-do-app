import React, { useContext } from "react";
import "./ProjectList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBriefcase, faUser, faList } from "@fortawesome/free-solid-svg-icons";
import logo from "../../logo/logo.png"
import { ThemeContext } from "../../context/ThemeContext";

const ProjectList = ({ onProjectClick }) => {
  const projectTypes = ["All", "Home", "Work", "Personal"];
  const iconMap = {
    All: faList,
    Home: faHome,
    Work: faBriefcase,
    Personal: faUser,
  };

  const { theme } = useContext(ThemeContext);

  const ProjectListStyles = {
    light: {
      backgroundColor: 'rgb(239 238 235)',
      color: '#333333',
      transition: '0.3s',
      borderRight: '2px solid rgb(255 255 255 / 11%)'
    },
    dark: {
      backgroundColor: 'rgb(15 19 24)',
      color: '#ffffff',
      transition: '0.3s',
      borderRight: '2px solid #8a8a8a0f'
    },
  };
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
