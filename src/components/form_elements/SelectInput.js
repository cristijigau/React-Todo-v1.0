import React from 'react';

import { ALL, COMPLETED, UNCOMPLETED, PROGRESS } from '../../constants';

const SelectInput = ({ setStatus }) => {
  const statusHandler = e => {
    setStatus(e.target.value);
  };
  return (
    <div className="select">
      <select onChange={statusHandler} name="todos" className="filter-todo">
        <option value={ALL}>All</option>
        <option value={COMPLETED}>Completed</option>
        <option value={UNCOMPLETED}>Uncompleted</option>
        <option value={PROGRESS}>In Progress</option>
      </select>
    </div>
  );
};

export default SelectInput;
