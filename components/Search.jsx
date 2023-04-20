import * as React from 'react';

const Search = (props) => {

  console.log('Search renders')

  // const handleChange = (event) => {
    /* C - is executed in seach component as callback handler */
    // props.onSearch(event);
  // };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.onSearch} />
      {/* <p>Search Term: <strong>{searchTerm}</strong></p> */}
    </div>
  );
};

export default Search;