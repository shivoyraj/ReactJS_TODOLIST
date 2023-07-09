import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddedTodo from './components/AddedTodo';

import axios from 'axios';
import './components/style.css';

const App = () => {

  const [todoItems, setTodoItems] = useState([]);
  const [selectItems, setSelectItems] = useState([]);

  useEffect(()=>{
    console.log(todoItems.length);
    console.log(selectItems.length);
  },[todoItems])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => setTodoItems(response.data))
      .catch((error) => console.log(error));
  }, []);

  const removeFromSelectedItems = (itemToBeDeleted) => {
    setSelectItems(selectItems.filter((item) => item.id !== itemToBeDeleted.id));
    setTodoItems([...todoItems, itemToBeDeleted]);
  };

  const addToSelectedItems = (itemToBeAdded) => {
    setTodoItems(todoItems.filter((item) => item.id !== itemToBeAdded.id));
    setSelectItems([...selectItems, itemToBeAdded]);
  };

  return (
    <>
      <h1>Todo List</h1>
      <div className="container">
        <div className="todo-list">
          <TodoList todoItems={todoItems} selectItems={selectItems} addToSelectedItems={addToSelectedItems} removeFromSelectedItems={removeFromSelectedItems} />
        </div>
        <div className="added-todo">
          <AddedTodo todoItems={todoItems}  selectItems={selectItems} addToSelectedItems={addToSelectedItems} removeFromSelectedItems={removeFromSelectedItems} />
        </div>
      </div>
    </>
  );
};

export default App;