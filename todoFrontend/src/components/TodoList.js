import React, { useEffect, useState } from 'react';
import { useFetch } from './hooks/useFetch';
import Todo from './Todo';

const TodoApp = () => {
  // states
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = '/api/todos/';
    if (description) {
      const todo = { description };
      let bodyStr = JSON.stringify(todo);
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: bodyStr,
      };
      fetch(url, options);
      setDescription('');
    }
  };

  return (
    <>
      <form className='form' id='todoForm' onSubmit={handleSubmit}>
        <input
          type='text'
          name='description'
          id='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='btn' type='submit'>
          Todo
        </button>
      </form>
      <Todo />
    </>
  );
};

export default TodoApp;
