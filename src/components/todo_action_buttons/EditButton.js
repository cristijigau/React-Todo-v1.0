import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';

const EditButton = ({ todo }) => {
  const { setAction, setItemToEdit, setInputText } = useContext(AppContext);
  const editHandler = () => {
    setAction('edit');
    setInputText(todo.text);
    setItemToEdit(todo.id);
  };
  return (
    <button onClick={editHandler} className="edit-btn">
      <i className="fas fa-edit"></i>
    </button>
  );
};

export default EditButton;
