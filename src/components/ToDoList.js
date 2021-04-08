import React from 'react';
import Todo from './Todo';

const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
  setAction,
  setItemToEdit,
  setInputText
}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            setAction={setAction}
            setItemToEdit={setItemToEdit}
            setInputText={setInputText}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
