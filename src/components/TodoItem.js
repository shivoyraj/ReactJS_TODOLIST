const TodoItem = (props) => {

  const toggleItem = () => {
    props.isSelected ? props.removeFromSelectedItems(props.todo) : props.addToSelectedItems(props.todo);
  }

  const buttonTitle = props.isSelected ? "-" : "+";

  return (
    <div id="ItemContainer">
      <span id = "title">{props.todo.title}</span>
      <button id="button" onClick={toggleItem}>{buttonTitle}</button>
    </div>
  );
};


export default TodoItem;