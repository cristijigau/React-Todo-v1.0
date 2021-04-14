import React from 'react';

import { COMPLETED } from '../constants';
import {
  CompleteButton,
  DeleteButton,
  EditButton,
  ProgressButton,
} from './todo_action_buttons/index';

const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <li
        className={`todo-item ${todo.completed ? COMPLETED : ''} ${
          todo.progress ? 'in-progress' : ''
        } `}
      >
        {todo.text}
      </li>
      <EditButton todo={todo} />
      <ProgressButton todo={todo} />
      <CompleteButton todo={todo} />
      <DeleteButton todo={todo} />
    </div>
  );
};

export default Todo;
