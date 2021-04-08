import React from 'react';

const SubmitButton = ({
  action,
  setAction,
  setTodos,
  todos,
  inputText,
  setInputText,
  itemToEdit,
}) => {
  const submitTodoHandler = e => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.random() * 100,
        text: inputText,
        completed: false,
        progress: false,
      },
    ]);
    setInputText('');
  };

  const editTodoHandler = e => {
    e.preventDefault();
    setTodos(
      todos.map(item => {
        if (item.id === itemToEdit)
          return {
            ...item,
            text: inputText,
          };
        else return item;
      })
    );
    setInputText('');
    setAction('add');
  };

  const actionButton = () => {
    let button;
    switch (action) {
      case 'add':
        button = (
          <button
            onClick={submitTodoHandler}
            className="todo-button"
            type="submit"
          >
            <i className="fas fa-plus-circle"></i>
          </button>
        );
        break;
      case 'edit':
        button = (
          <button
            onClick={editTodoHandler}
            className="todo-button"
            type="submit"
          >
            <i className="fas fa-pen-square"></i>
          </button>
        );
        break;
      default:
    }
    return button;
  };
  return actionButton();
};

export default SubmitButton;
