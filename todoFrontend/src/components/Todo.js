import React, { useState } from 'react';

const Todo = ({ id, description, completed }) => {
  // functions

  const handleUpdate = (e) => {
    const newCompleted = e.target.checked;
    console.log(newCompleted);
  };

  return <li key={id}>{description}</li>;
};

export default Todo;
