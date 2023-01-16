import React, { useEffect, useState } from 'react';
import { useFetch } from './hooks/useFetch';
import Todo from './Todo';

const url = '/api/todos/';

const TodoApp = () => {
  // states
  const { todos, setTodos } = useFetch(url);
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState('');

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
      fetch(url, options)
        .then((resp) => resp.json())
        .then((todo) => setTodos([...todos, todo]))
        .catch((err) => console.log(err));

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
      <section>
        {todos.map((todo) => {
          return <Todo key={todo.id} {...todo} />;
        })}
      </section>
    </>
  );
};

export default TodoApp;
