import React, { useEffect, useState } from 'react';

import { COMPLETED, PROGRESS, UNCOMPLETED } from '../constants';
import { SelectInput, SubmitButton, TextInput } from './form_elements/index';

const Form = ({
  todos,
  setTodos,
  action,
  setAction,
  itemToEdit,
  setFilteredTodos,
  setInputText,
  inputText,
}) => {
  //State variables
  const [status, setStatus] = useState('all');

  //Hook usage
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case COMPLETED:
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      case UNCOMPLETED:
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;
      case PROGRESS:
        setFilteredTodos(todos.filter(todo => todo.progress));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <form>
      <TextInput setInputText={setInputText} inputText={inputText} />
      <SubmitButton
        action={action}
        setAction={setAction}
        setTodos={setTodos}
        todos={todos}
        inputText={inputText}
        setInputText={setInputText}
        itemToEdit={itemToEdit}
      />
      <SelectInput setStatus={setStatus} />
    </form>
  );
};

export default Form;
