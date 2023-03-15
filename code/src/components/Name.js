import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  return (
    <div>
      <h1>Hello there, thank you for taking part in this survey</h1>
      <p>Please start with entering your name:</p>
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
  );
};