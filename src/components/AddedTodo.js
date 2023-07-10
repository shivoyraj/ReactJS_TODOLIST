import TodoItem from './TodoItem';

// Component for displaying the added todos
const AddedTodo = (props) => {
  return (
    <div>
      {props.selectItems.map((todo) => (
        // Render TodoItem component for each selected todo
        <TodoItem key={todo.id} todo={todo} removeFromSelectedItems={props.removeFromSelectedItems} isSelected={true} />
      ))}
    </div>
  );
};

export default AddedTodo;