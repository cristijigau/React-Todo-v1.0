import React, { useState, useEffect } from 'react';
import TextInput from './form_elements/TextInput';
import SelectInput from './form_elements/SelectInput';
import SubmitButton from './form_elements/SubmitButton';

const Form = ({
  todos,
  setTodos,
  action,
  setAction,
  itemToEdit,
  setFilteredTodos,
  setInputText,
  inputText
}) => {
  //State variables
  const [status, setStatus] = useState('all');
  //Functions

    //use effect
    useEffect(() => {
      filterHandler();
    }, [todos, status]);

    //Functions
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        case 'progress':
          setFilteredTodos(todos.filter(todo => todo.progress === true));
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
