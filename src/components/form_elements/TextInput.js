import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';
import ThemeContext from '../../contexts/ThemeContext';

const TextInput = () => {
  //used useContext Hook instead of props
  const { inputText, setInputText } = useContext(AppContext);
  const theme = useContext(ThemeContext);

  const inputTextHandler = e => {
    setInputText(e.target.value);
  };
  return (
    <input
      value={inputText}
      onChange={inputTextHandler}
      type="text"
      className={`todo-input ${theme}`}
    />
  );
};

export default TextInput;
