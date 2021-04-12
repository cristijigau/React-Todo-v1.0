import './App.css';

import React, { useState } from 'react';

import Form from './components/Form';
import ToDoList from './components/ToDoList';

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
      <Form
        todos={todos}
        setTodos={setTodos}
        action={action}
        setAction={setAction}
        itemToEdit={itemToEdit}
        setFilteredTodos={setFilteredTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        action={action}
        setAction={setAction}
        setItemToEdit={setItemToEdit}
        setInputText={setInputText}
      />
    </div>
  );
}

export default App;
