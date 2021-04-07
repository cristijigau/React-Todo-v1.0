import React from 'react';

const Form = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  setStatus,
  action,
  setAction,
  itemToEdit,
}) => {
  const inputTextHandler = e => {
    setInputText(e.target.value);
  };

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

  const statusHandler = e => {
    setStatus(e.target.value);
  };

  let actionButton = (() => {
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
  })();

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      {actionButton}
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
          <option value="progress">In Progress</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
