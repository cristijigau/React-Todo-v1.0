import { createContext } from 'react';

const AppContext = createContext({
  todos: [],
  setTodos: () => {},
  action: 'add',
  setAction: () => {},
  itemToEdit: undefined,
  setItemToEdit: () => {},
  inputText: '',
  setInputText: () => {},
});

export default AppContext;
