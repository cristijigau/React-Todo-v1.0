import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';
import ThemeContext from '../../contexts/ThemeContext';

const DeleteButton = ({ todo }) => {
  const { setTodos, todos } = useContext(AppContext);
  const theme = useContext(ThemeContext);

  const deleteHandler = () => {
    setTodos(todos.filter(item => item.id !== todo.id));
  };
  return (
    <button onClick={deleteHandler} className={`trash-btn ${theme}`}>
      <i className="fas fa-trash"></i>
    </button>
  );
};

export default DeleteButton;
