import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';

const DeleteButton = ({ todo }) => {
  const { setTodos, todos } = useContext(AppContext);

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
