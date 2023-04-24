import * as React from 'react';
 //** function - concise body instead of block body when we do object destructuring of props object*/
const Search = ({ search, onSearch }) => (
  // const { search, onSearch } = props;

  // console.log('Search renders')

  // const handleChange = (event) => {
    /* C - is executed in seach component as callback handler */
    // props.onSearch(event);
  // };

    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={onSearch} />
      {/* <p>Search Term: <strong>{searchTerm}</strong></p> */}
    </div>
  );

export default Search;