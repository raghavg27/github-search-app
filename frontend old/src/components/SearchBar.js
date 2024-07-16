// src/components/SearchBar.js

import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, clearSearch, handleKeyPress }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Start typing Name"
        value={searchQuery}
        onChange={setSearchQuery}
        onKeyPress={handleKeyPress}
      />
      <button onClick={clearSearch}>Clear</button>
    </div>
  );
};

export default SearchBar;
