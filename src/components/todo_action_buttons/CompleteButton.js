import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';

const CompleteButton = ({ todo }) => {
  const { setTodos, todos } = useContext(AppContext);

  const completeHandler = () => {
    setTodos(
      todos.map(item => {
        if (item.id === todo.id) {
          return {
            ...item,
            progress: false,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <button onClick={completeHandler} className="complete-btn">
      <i className="fas fa-check"></i>
    </button>
  );
};

export default CompleteButton;
