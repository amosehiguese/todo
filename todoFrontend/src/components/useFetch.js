import { useState, useEffect } from 'react';

export const useFetch = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTodos = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const todos = await response.json();
      setTodos(todos);
      setIsLoading(false);

      useEffect(() => {
        getTodos();
      }, [url]);
    } catch (error) {
      setError(error);
    }
  };

  return { todos, isLoading, error };
};
