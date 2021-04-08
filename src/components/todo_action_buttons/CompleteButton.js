import React from 'react';

const CompleteButton = ({ setTodos, todos, todo }) => {
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
