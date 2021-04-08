import React from 'react';

const SelectInput = ({ setStatus }) => {
  const statusHandler = e => {
    setStatus(e.target.value);
  };
  return (
    <div className="select">
      <select onChange={statusHandler} name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
        <option value="progress">In Progress</option>
      </select>
    </div>
  );
};

export default SelectInput;
