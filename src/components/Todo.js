import React from 'react';

import CompleteButton from './todo_action_buttons/CompleteButton';
import DeleteButton from './todo_action_buttons/DeleteButton';
import EditButton from './todo_action_buttons/EditButton';
import ProgressButton from './todo_action_buttons/ProgressButton';

const Todo = ({
  todo,
  todos,
  setTodos,
  setAction,
  setItemToEdit,
  setInputText,
}) => {
  return (
    <div className="todo">
      <li
        className={`todo-item ${todo.completed ? 'completed' : ''} ${
          todo.progress ? 'in-progress' : ''
        } `}
      >
        {todo.text}
      </li>
      <EditButton
        setAction={setAction}
        setItemToEdit={setItemToEdit}
        todo={todo}
        setInputText={setInputText}
      />
      <ProgressButton setTodos={setTodos} todos={todos} todo={todo} />
      <CompleteButton setTodos={setTodos} todos={todos} todo={todo} />
      <DeleteButton setTodos={setTodos} todos={todos} todo={todo} />
    </div>
  );
};

export default Todo;
