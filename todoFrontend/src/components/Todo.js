import React, { useState } from 'react';
import { useFetch } from './hooks/useFetch';

const Todo = () => {
  // states
  const { todos, setTodos } = useFetch('/api/todos/');
  const [completed, setCompleted] = useState('');

  // functions

  const handleUpdate = (e) => {
    const newCompleted = e.target.checked;
    console.log(newCompleted);
  };

  return (
    <ul>
      {todos.map((todo) => {
        const { id, description, completed } = todo;
        console.log(completed);
        return (
          <div key={id}>
            <li key={id}>
              <input type='checkbox' onChange={handleUpdate} />
              {description}
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default Todo;
