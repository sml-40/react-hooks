import * as React from 'react';
 //** function - concise body instead of block body when we do object destructuring of props object*/
const InputWithLabel = ({ id, label, value, onInputChange }) => (
  // const { search, onSearch } = props;

  // console.log('Search renders')

  // const handleChange = (event) => {
    /* C - is executed in seach component as callback handler */
    // props.onSearch(event);
  // };
//** React.fragment like a container element to render top-level elements side-by-side */
    <>
    <label htmlFor={id}>{label}</label>
    &nbsp;
      <input
        id={id}
        type="text"
        value={value}
        onChange={onInputChange} />
      {/* <p>Search Term: <strong>{searchTerm}</strong></p> */}
    </>
  );

export default InputWithLabel;