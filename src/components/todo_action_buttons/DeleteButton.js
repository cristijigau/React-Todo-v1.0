import React from 'react';

const DeleteButton = ({ setTodos, todos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter(item => item.id !== todo.id));
  };
  return (
    <button onClick={deleteHandler} className="trash-btn">
      <i className="fas fa-trash"></i>
    </button>
  );
};

export default DeleteButton;
