import React, { useState, useRef, useEffect } from 'react';
import TodoItem from './TodoItem';

const AddedTodo = (props) => {
  return (
    <div>
      {props.selectItems.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeFromSelectedItems={props.removeFromSelectedItems} isSelected={true} />
      ))}
    </div>
  );
};

export default AddedTodo;