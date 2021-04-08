import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import { useState } from 'react';

function App() {
  //State
  const [todos, setTodos] = useState([]);
  const [action, setAction] = useState('add');
  const [itemToEdit, setItemToEdit] = useState(undefined);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  //run once when the app starts
  


  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        action={action}
        setAction={setAction}
        itemToEdit={itemToEdit}
        setFilteredTodos={setFilteredTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        action={action}
        setAction={setAction}
        setItemToEdit={setItemToEdit}
        setInputText={setInputText}
      />
    </div>
  );
}

export default App;
