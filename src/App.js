import './css/App.css';
import './css/AppDark.css';

import React, { useState } from 'react';

import Form from './components/Form';
import ThemeToggleButton from './components/ThemeToggleButton';
import ToDoList from './components/ToDoList';
import { DARK, LIGHT } from './constants';
import {AppContext, ThemeContext} from "./contexts";

function App() {
  //State
  const [todos, setTodos] = useState([]);
  const [action, setAction] = useState('add');
  const [itemToEdit, setItemToEdit] = useState(undefined);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [theme, setTheme] = useState(LIGHT);

  const toggleTheme = () => {
    setTheme(theme === LIGHT ? DARK : LIGHT);
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
