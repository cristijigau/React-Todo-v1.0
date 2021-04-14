import './App.css';

import React, { useState } from 'react';

import Form from './components/Form';
import ToDoList from './components/ToDoList';
import AppContext from './contexts/AppContext';

function App() {
  //State
  const [todos, setTodos] = useState([]);
  const [action, setAction] = useState('add');
  const [itemToEdit, setItemToEdit] = useState(undefined);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <AppContext.Provider
        value={{
          todos,
          setTodos,
          action,
          setAction,
          setItemToEdit,
          setInputText,
          itemToEdit,
          inputText,
        }}
      >
        <Form setFilteredTodos={setFilteredTodos} todos={todos} />
        <ToDoList filteredTodos={filteredTodos} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
