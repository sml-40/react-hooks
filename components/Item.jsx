const Item = ({item}) => (
  <li>
  <span>
    <a href={item.objectID}>{item.title}</a>
  </span>
  <span>{item.author}</span>
  <span>{item.num_comments}</span>
  <span>{item.points}</span>
    </li>
);

export default Item;