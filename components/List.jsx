import Item from "./Item";

// const list = [
//   {
//     title: 'React',
//     url: 'https://reactjs.org/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: 'Redux',
//     url: 'https://redux.js.org',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   }
// ];

//** concise body with object destructuring of props object */
const List = ({ list }) => (
  // console.log('List renders');
  // return (
     
    <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
        
    </ul>
  );
export default List;
