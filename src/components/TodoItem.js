import React from 'react';

const TodoItem = (props) => {

  const toggleItem = () => {
    props.isSelected ? props.removeFromSelectedItems(props.todo) : props.addToSelectedItems(props.todo);
  }

  const buttonTitle = props.isSelected ? "Remove from ToDo List" : "Add to ToDo List";

  return (
    <div>
      <span>{props.todo.title}</span>
      <button onClick={toggleItem}>{buttonTitle}</button>
    </div>
  );
};


export default TodoItem;