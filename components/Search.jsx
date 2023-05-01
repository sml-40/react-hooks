import * as React from 'react';
 //** function - concise body instead of block body when we do object destructuring of props object*/
 //** With the changes below, passing the props from the app comp, we have now made a specialisedsearch component into a more reusable, generalised comp */
const InputWithLabel = ({
  id,
  label,
  value,
  type = 'text',
  onInputChange
}) => (
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
      type={ type }
      value={value}
      onChange={onInputChange} />
      {/* <p>Search Term: <strong>{searchTerm}</strong></p> */}
    </>
  );

export default InputWithLabel;