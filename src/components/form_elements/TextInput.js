import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';

const TextInput = () => {
  //used useContext Hook instead of props
  const { inputText, setInputText } = useContext(AppContext);

  const inputTextHandler = e => {
    setInputText(e.target.value);
  };
  return (
    <input
      value={inputText}
      onChange={inputTextHandler}
      type="text"
      className="todo-input"
    />
  );
};

export default TextInput;
