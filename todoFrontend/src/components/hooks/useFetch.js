import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTodos = async () => {
    const response = await fetch(url);
    const todos = await response.json();
    setTodos(todos);
    setIsLoading(false);
  };
  useEffect(() => {
    getTodos();
  }, [url]);

  return { todos, setTodos, isLoading, error };
};
