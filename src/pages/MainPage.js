import React, { useState } from "react";
import MainContent from "../components/MainContent/MainContent";
import { TopBar } from "../reusableComponents/reusableComponents";

import "./MainPage.css";

const MainPage = () => {
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState("All");

  const handleSearch = (term) => {
    setSearch(term);
  };

  return (
    <>
      {/* rendering TopBar with props */}
      <TopBar placeholder="Search for a task" onSearch={handleSearch} />
      {/* passing selected project and handler to MainContent */}
      <MainContent
        search={search}
        selectedProject={selectedProject}
        onProjectClick={setSelectedProject}
      />
    </>
  );
};

export default MainPage;
