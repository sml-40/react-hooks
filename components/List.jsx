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
      //** Variation 2: Spread and Rest Operators - clutter in list comnponent, only slightly less cluttered in Item Component*/
      //** Variation 2, step 2: JS Spread operator - declutter, more concise */
      <Item key={item.objectID} item={item} />

        // title={item.title}
        // url={item.url}
        // author={item.author}
        // num_comments={item.num_comments}
        // points={item.points}
    ))}        
  </ul>
);
  
export default List;
