import React, { useState } from 'react';

const Todo = ({ id, description, completed }) => {
  // functions
  console.log(completed);
  const handleUpdate = (e) => {
    const newCompleted = e.target.checked;
    console.log(newCompleted);
  };

  return (
    <div key={id}>
      <h4>
        <input type='checkbox' name='' id='' />
        {description}
        <input className='btn' type='submit' value='delete' />
      </h4>
    </div>
  );
};

export default Todo;
