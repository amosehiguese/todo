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
        return <li key={id}>{description}</li>;
      })}
    </ul>
  );
};

export default Todo;
