import React from "react";

const SearchBar = props => {
  return (
    <input
      className='searchBox'
      name='searchInput'
      onChange={e => props.onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
