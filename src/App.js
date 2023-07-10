import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddedTodo from './components/AddedTodo';

import axios from 'axios';
import './components/style.css';

const App = () => {

  const [todoItems, setTodoItems] = useState([]);
  const [selectItems, setSelectItems] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        setTodoItems(response.data);
        setSelectItems(Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key))));
      })
      .catch((error) => console.log(error));
  }, []);

  const removeFromSelectedItems = (itemToBeDeleted) => {
    setSelectItems(selectItems.filter((item) => item.id !== itemToBeDeleted.id));
    setTodoItems([...todoItems, itemToBeDeleted]);
    localStorage.removeItem(itemToBeDeleted.id.toString());
  };

  const addToSelectedItems = (itemToBeAdded) => {
    setTodoItems(todoItems.filter((item) => item.id !== itemToBeAdded.id));
    setSelectItems([...selectItems, itemToBeAdded]);
    localStorage.setItem(itemToBeAdded.id.toString(), JSON.stringify(itemToBeAdded));
  };

  return (
    <>
      <div className="heading">
        <h1 id="itemsHeading">Item List</h1>
        <h1 id="todosHeading">Todo List</h1>
      </div>
      <div className="container">
        <div className="todo-list">
          <TodoList todoItems={todoItems} addToSelectedItems={addToSelectedItems} />
        </div>
        <div className="added-todo">
          <AddedTodo selectItems={selectItems} removeFromSelectedItems={removeFromSelectedItems} />
        </div>
      </div>
    </>
  );
};

export default App;