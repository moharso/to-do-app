import React, { useState } from "react";
import MainContent from "../components/MainContent/MainContent";
import TopBar from "../components/TopBar/TopBar.js";

import "./MainPage.css";

const MainPage = () => {
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState("All");

  const handleSearch = (term) => {
    setSearch(term);
  };

  return (
    <div className="MainPage">
      <div className="TopBar">
        {/* rendering TopBar with props */}
        <TopBar placeholder="Search for a task" onSearch={handleSearch} className="TopBar" />
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
