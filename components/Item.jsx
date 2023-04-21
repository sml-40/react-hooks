//** Nested destructuring */

const Item = ({
  // item: { //** Variation 2: Spread and Rest Operators - item component slightly more concise but the clutter is in the List Component*/
    title,
    url,
    author,
    num_comments,
    points,
  },
) => (
  <li>
  <span>
    <a href={url}>{title}</a>
  </span>
  <span>{author}</span>
  <span>{num_comments}</span>
  <span>{points}</span>
    </li>
);

export default Item;