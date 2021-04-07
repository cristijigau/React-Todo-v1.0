import React from 'react';

const Todo = ({
  todo,
  todos,
  setTodos,
  inputText,
  setInputText,
  action,
  setAction,
  setItemToEdit
}) => {
  const deleteHandler = () => {
    setTodos(todos.filter(item => item.id !== todo.id));
  };
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
  const editHandler = () => {
    setInputText(todo.text);
    setAction('edit');
    setItemToEdit(todo.id);
  };
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
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''} ${todo.progress ? 'in-progress' : ''} `}>
        {todo.text}
      </li>
      <button onClick={editHandler} className="edit-btn">
        <i className="fas fa-edit"></i>
      </button>
      <button
        onClick={progressHandler}
        disabled={todo.completed ? true : false}
        className={`progress-btn ${todo.completed ? 'disabled' : ''}`}
      >
        <i className="fas fa-spinner"></i>
      </button>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
