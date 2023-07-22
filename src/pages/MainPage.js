import React, { useState } from "react";
import MainContent from "../components/MainContent/MainContent";
import TopBar from "../components/TopBar/TopBar";
import "./MainPage.css";

const MainPage = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (term) => {
    setSearch(term);
  };

  return (
    <>
      {/* rendering TopBar with props */}
      <TopBar placeholder="Search for a task" onSearch={handleSearch} />
      <MainContent search={search} />
    </>
  );
};

export default MainPage;
