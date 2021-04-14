import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';
import ThemeContext from '../../contexts/ThemeContext';

const ProgressButton = ({ todo }) => {
  const { setTodos, todos } = useContext(AppContext);
  const theme = useContext(ThemeContext);
  const progressHandler = () => {
    setTodos(
      todos.map(item => {
        if (item.id === todo.id) {
          return {
            ...item,
            progress: !item.progress,
          };
        }
        return item;
      })
    );
  };
  return (
    <button
      onClick={progressHandler}
      disabled={todo.completed}
      className={`progress-btn ${todo.completed ? 'disabled' : ''} ${theme}`}
    >
      <i className="fas fa-spinner"></i>
    </button>
  );
};

export default ProgressButton;
