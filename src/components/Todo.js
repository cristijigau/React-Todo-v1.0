import React, { useContext } from 'react';

import { COMPLETED } from '../constants';
import ThemeContext from '../contexts/ThemeContext';
import {
  CompleteButton,
  DeleteButton,
  EditButton,
  ProgressButton,
} from './todo_action_buttons/index';

const Todo = ({ todo }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className="todo">
      <li
        className={`todo-item ${todo.completed ? COMPLETED : ''} ${
          todo.progress ? 'in-progress' : ''
        } ${theme}`}
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
