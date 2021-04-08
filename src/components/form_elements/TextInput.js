import React from 'react';

const TextInput = ({ inputText, setInputText }) => {
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
