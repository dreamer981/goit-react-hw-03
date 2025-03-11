import React, { useState } from "react";
import style from './SearchBox.module.css'

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(""); 

  const handleChange = (event) => {
    setSearchTerm(event.target.value); 
    onSearch(event.target.value);
  };

  return (
    <div>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className={style.searchInput}
      />
    </div>
  );
};

export default SearchBox;

