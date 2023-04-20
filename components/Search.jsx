import * as React from 'react';

const Search = (props) => {

  console.log('Search renders')
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    
    /* C - is executed in seach component as callback handler */
    props.onSearch(event);

  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      
      <p>Search Term: <strong>{searchTerm}</strong></p>
    </div>
  );
};

export default Search;