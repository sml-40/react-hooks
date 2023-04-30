import * as React from 'react';
 //** function - concise body instead of block body when we do object destructuring of props object*/
const Search = ({ search, onSearch }) => (
  // const { search, onSearch } = props;

  // console.log('Search renders')

  // const handleChange = (event) => {
    /* C - is executed in seach component as callback handler */
    // props.onSearch(event);
  // };
//** React.fragment like a container element to render top-level elements side-by-side */
    <>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={onSearch} />
      {/* <p>Search Term: <strong>{searchTerm}</strong></p> */}
    </>
  );

export default Search;