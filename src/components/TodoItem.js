import React, { useState } from 'react';

const TodoItem = (props) => {

  const [isSelected, setIsSelected] = useState(props.isSelected);
  const [buttonTitle, setButtonTitle] = useState("");

  const refreshStates = () => {
    isSelected ? setButtonTitle("Remove from ToDo List") : setButtonTitle("Add to ToDo List");
  }

  useState(() => {
    refreshStates();
  }, []);

  useState(() => {
  }, [isSelected, buttonTitle]);

  const toggleItem = () => {
    isSelected ? props.removeFromSelectedItems(props.todo) : props.addToSelectedItems(props.todo);
    setIsSelected(!isSelected);
  }

  return (
    <div>
      <span>{props.todo.title}</span>
      <button onClick={() => toggleItem()}>{buttonTitle}</button>
    </div>
  );
};

export default TodoItem;