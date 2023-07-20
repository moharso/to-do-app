import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./TopBar.css";

const TopBar = ({ placeholder, data, onSearch }) => {
  console.log("onSearch prop value:", onSearch);
  return (
    <div className="search">
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
      <div className="searchResults">
        {data && data.map((item) => <p>{item.input}</p>)}
      </div>
    </div>
  );
};

export default TopBar;
