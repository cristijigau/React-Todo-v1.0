import React from 'react';

const EditButton = ({ setAction, setItemToEdit, todo, setInputText }) => {
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
