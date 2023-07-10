const TodoItem = (props) => {
  // Function to toggle the selection of the todo item
  const toggleItem = () => {
    props.isSelected
      ? props.removeFromSelectedItems(props.todo) // If the item is selected, remove it from the selected items
      : props.addToSelectedItems(props.todo); // If the item is not selected, add it to the selected items
  };

  // Determine the button title based on whether the item is selected or not
  const buttonTitle = props.isSelected ? "-" : "+";

  return (
    <div id="ItemContainer">
      <span id="title">{props.todo.title}</span> {/* Displaying the title of the todo item */}
      <button id="button" onClick={toggleItem}>
        {buttonTitle} {/* Displaying the button title */}
      </button>
    </div>
  );
};

export default TodoItem;
