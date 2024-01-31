// src/components/SearchBar.js

// component to display search bar

import React from 'react';

 const SearchBar = ({ searchQuery, setSearchQuery, clearSearch, handleKeyPress }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Start typing Name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={clearSearch}>Clear</button>
    </div>
  );
};

export default SearchBar;