import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';
import ThemeContext from '../../contexts/ThemeContext';

const SubmitButton = ({ todos }) => {
  const {
    action,
    setAction,
    setTodos,
    inputText,
    setInputText,
    itemToEdit,
  } = useContext(AppContext);

  const theme = useContext(ThemeContext);

  const submitTodoHandler = e => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.random() * 100,
        text: inputText,
        completed: false,
        progress: false,
      },
    ]);
    setInputText('');
  };

  const editTodoHandler = e => {
    e.preventDefault();
    setTodos(
      todos.map(item => {
        if (item.id === itemToEdit)
          return {
            ...item,
            text: inputText,
          };
        else return item;
      })
    );
    setInputText('');
    setAction('add');
  };

  const actionButton = () => {
    switch (action) {
      case 'add':
        return (
          <button
            onClick={submitTodoHandler}
            className={`todo-button ${theme}`}
            type="submit"
          >
            <i className="fas fa-plus-circle"></i>
          </button>
        );
      case 'edit':
        return (
          <button
            onClick={editTodoHandler}
            className={`todo-button ${theme}`}
            type="submit"
          >
            <i className="fas fa-pen-square"></i>
          </button>
        );
    }
  };
  return actionButton();
};

export default SubmitButton;
