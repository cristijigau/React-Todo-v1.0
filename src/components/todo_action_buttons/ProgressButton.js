import React from 'react';

const ProgressButton = ({setTodos, todos, todo}) =>{
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
    return(
        <button
        onClick={progressHandler}
        disabled={todo.completed ? true : false}
        className={`progress-btn ${todo.completed ? 'disabled' : ''}`}
        >
        <i className="fas fa-spinner"></i>
        </button>
    );
}

export default ProgressButton;