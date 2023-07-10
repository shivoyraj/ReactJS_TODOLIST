import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddedTodo from './components/AddedTodo';

import axios from 'axios';
import './components/style.css';

const App = () => {
  // State variables to store the todo items and selected items
  const [todoItems, setTodoItems] = useState([]);
  const [selectItems, setSelectItems] = useState([]);

  useEffect(() => {
    // Fetching todo items from the API when the component mounts
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        setTodoItems(response.data); // Updating the todoItems state variable with the fetched data
        setSelectItems(Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)))); // Retrieving selected items from local storage and updating selectItems state variable
      })
      .catch((error) => console.log(error));
  }, []);

  const removeFromSelectedItems = (itemToBeDeleted) => {
    // Removing item from selected items and updating todoItems state variable
    setSelectItems(selectItems.filter((item) => item.id !== itemToBeDeleted.id));
    setTodoItems([...todoItems, itemToBeDeleted]);
    localStorage.removeItem(itemToBeDeleted.id.toString()); // Removing item from local storage
  };

  const addToSelectedItems = (itemToBeAdded) => {
    // Adding item to selected items and updating todoItems state variable
    setTodoItems(todoItems.filter((item) => item.id !== itemToBeAdded.id));
    setSelectItems([...selectItems, itemToBeAdded]);
    localStorage.setItem(itemToBeAdded.id.toString(), JSON.stringify(itemToBeAdded)); // Storing item in local storage
  };

  return (
    <>
      <div className="heading">
        <h1 id="itemsHeading">Item List</h1>
        <h1 id="todosHeading">Todo List</h1>
      </div>
      <div className="container">
        <div className="todo-list">
          {/* Rendering TodoList component and passing props */}
          <TodoList todoItems={todoItems} addToSelectedItems={addToSelectedItems} />
        </div>
        <div className="added-todo">
          {/* Rendering AddedTodo component and passing props */}
          <AddedTodo selectItems={selectItems} removeFromSelectedItems={removeFromSelectedItems} />
        </div>
      </div>
    </>
  );
};

export default App;