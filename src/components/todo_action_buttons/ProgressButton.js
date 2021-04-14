import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';

const ProgressButton = ({ todo }) => {
  const { setTodos, todos } = useContext(AppContext);
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
      className={`progress-btn ${todo.completed ? 'disabled' : ''}`}
    >
      <i className="fas fa-spinner"></i>
    </button>
  );
};

export default ProgressButton;
