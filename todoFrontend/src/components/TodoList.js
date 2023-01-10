import React, { useEffect, useState } from 'react';
import { useFetch } from './hooks/useFetch';
import Todo from './Todo';

const TodoApp = () => {
  // states
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = '/api/todos/';
    if (description) {
      const todo = { description };
      let bodyStr = JSON.stringify(todo);
      const option = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: bodyStr,
      };
      fetch(url, option)
        .then((response) => {
          return response.json();
        })
        .then((newTodos) => {
          return setTodos((todos) => {
            return [...todos, newTodos];
          });
        });
      setDescription('');
    }
  };

  return (
    <>
      <form id='todoForm' onSubmit={handleSubmit}>
        <input
          type='text'
          name='description'
          id='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type='submit'>Todo</button>
      </form>
      <Todo />
    </>
  );
};

export default TodoApp;
