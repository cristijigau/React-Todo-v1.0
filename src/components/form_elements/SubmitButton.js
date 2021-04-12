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
    switch (action) {
      case 'add':
        return (
          <button
            onClick={submitTodoHandler}
            className="todo-button"
            type="submit"
          >
            <i className="fas fa-plus-circle"></i>
          </button>
        );
      case 'edit':
        return (
          <button
            onClick={editTodoHandler}
            className="todo-button"
            type="submit"
          >
            <i className="fas fa-pen-square"></i>
          </button>
        );
    }
  };
  return actionButton();
};

export default SubmitButton;
