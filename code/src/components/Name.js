import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div className="inputName">
      <p>What is your name?</p>
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
  );
}