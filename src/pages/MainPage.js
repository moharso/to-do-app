import React, { useState } from "react";
import { useContext } from "react";
import MainContent from "../components/MainContent/MainContent";
import TopBar from "../components/TopBar/TopBar.js";

import { ThemeContext } from "../context/ThemeContext";

import "./MainPage.css";

const MainPage = () => {
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState("All");

  const handleSearch = (term) => {
    setSearch(term);
  };

  const { theme } = useContext(ThemeContext);

  const TopBarStyles = {
    light: {
      backgroundColor: '#b5aa9d',
      color: '#333333',
      transition: '0.3s',
    },
    dark: {
      backgroundColor: '#353535',
      color: '#ffffff',
      transition: '0.3s',
    },
  };

  return (
    <div className="MainPage">
      <div className="TopBar" style={{...TopBarStyles[theme]}}>
        {/* rendering TopBar with props */}
        <TopBar placeholder="Search for a task" onSearch={handleSearch} className="TopBar"/>
        {/* passing selected project and handler to MainContent */}
      </div>
      <div className="MainContent">
        <MainContent
          search={search}
          selectedProject={selectedProject}
          onProjectClick={setSelectedProject}
        />
      </div>
    </div>
  );
};

export default MainPage;
