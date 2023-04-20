const Item = (props) => (
  <li>
  <span>
    <a href={props.item.objectID}>{props.item.title}</a>
  </span>
  <span>{props.item.author}</span>
  <span>{props.item.num_comments}</span>
  <span>{props.item.points}</span>
    </li>
);

export default Item;