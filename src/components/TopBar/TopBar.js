import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./TopBar.css";
import DarkLightButton from "../DarkLightButton/DarkLightButton";

const TopBar = ({ placeholder, onSearch }) => {
  return (
    <div className="TopBarContent">
      <div className="SwitchButton">
        <DarkLightButton />
      </div>
      <div className="searchInput">
        <input
          type="text"
          placeholder={placeholder}
          onChange={(event) => onSearch(event.target.value)}
        />
        <button className="searchButton" type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
