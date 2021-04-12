import React, { useEffect, useState } from 'react';

import SelectInput from './form_elements/SelectInput';
import SubmitButton from './form_elements/SubmitButton';
import TextInput from './form_elements/TextInput';

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
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      case 'progress':
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
