import React, { useContext } from 'react';

import { ALL, COMPLETED, UNCOMPLETED, PROGRESS } from '../../constants';
import ThemeContext from '../../contexts/ThemeContext';

const SelectInput = ({ setStatus }) => {
  const theme = useContext(ThemeContext);
  const statusHandler = e => {
    setStatus(e.target.value);
  };
  return (
    <div className={`select ${theme}`}>
      <select
        onChange={statusHandler}
        name="todos"
        className={`filter-todo ${theme}`}
      >
        <option value={ALL}>All</option>
        <option value={COMPLETED}>Completed</option>
        <option value={UNCOMPLETED}>Uncompleted</option>
        <option value={PROGRESS}>In Progress</option>
      </select>
    </div>
  );
};

export default SelectInput;
