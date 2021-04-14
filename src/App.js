import './css/App.css';
import './css/AppDark.css';

import React, { useState } from 'react';

import Form from './components/Form';
import ThemeToggleButton from './components/ThemeToggleButton';
import ToDoList from './components/ToDoList';
import AppContext from './contexts/AppContext';
import ThemeContext from './contexts/ThemeContext';

function App() {
  //State
  const [todos, setTodos] = useState([]);
  const [action, setAction] = useState('add');
  const [itemToEdit, setItemToEdit] = useState(undefined);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App  ${theme}`}>
      <header>
        <h1>Todo List</h1>
        <ThemeToggleButton toggleTheme={toggleTheme} />
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
        <ThemeContext.Provider value={theme}>
          <Form setFilteredTodos={setFilteredTodos} todos={todos} />
          <ToDoList filteredTodos={filteredTodos} />
        </ThemeContext.Provider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
