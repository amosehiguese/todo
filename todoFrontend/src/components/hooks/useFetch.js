import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getTodos = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url, options);
      const todos = await response.json();
      setTodos(todos);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    getTodos();
  }, [url]);

  return { todos, setTodos, isLoading, error };
};
