import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <label for="name">
    
      <p>What is your name?</p>
      <input type="text" placeholder='name' value={name} onChange={handleNameChange} />
    </label>
  );
}