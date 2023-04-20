import * as React from 'react';

const Search = () => {

  console.log('Search renders')
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
   setSearchTerm(event.target.value);
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