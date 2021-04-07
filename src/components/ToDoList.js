import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos, inputText, setInputText, action, setAction, setItemToEdit  }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} 
          action={action} setAction={setAction} setItemToEdit={setItemToEdit}/>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
