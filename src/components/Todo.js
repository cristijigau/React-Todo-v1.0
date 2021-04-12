import React from 'react';

import { COMPLETED } from '../constants';
import {
  CompleteButton,
  DeleteButton,
  EditButton,
  ProgressButton,
} from './todo_action_buttons/index';

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
        className={`todo-item ${todo.completed ? COMPLETED : ''} ${
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
