import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';
import ThemeContext from '../../contexts/ThemeContext';

const EditButton = ({ todo }) => {
  const { setAction, setItemToEdit, setInputText } = useContext(AppContext);
  const theme = useContext(ThemeContext);

  const editHandler = () => {
    setAction('edit');
    setInputText(todo.text);
    setItemToEdit(todo.id);
  };
  return (
    <button onClick={editHandler} className={`edit-btn ${theme}`}>
      <i className="fas fa-edit"></i>
    </button>
  );
};

export default EditButton;
