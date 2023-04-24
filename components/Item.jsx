//** Nested destructuring */

const Item = ({ item  }) => (
  // item: { //** Variation 2: Spread and Rest Operators - item component slightly more concise but the clutter is in the List Component*/

  <li>
  <span>
    <a href={item.url}>{item.title}</a>
  </span>
  <span>{item.author}</span>
  <span>{item.num_comments}</span>
  <span>{item.points}</span>
    </li>
);

export default Item;