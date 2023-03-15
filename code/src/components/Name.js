import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <label htmlFor="name">
      <h2>Please enter your name:</h2>
      <input
        id="name"
        type="text"
        value={name}
        onChange={handleNameChange}
        className="input-field" />
    </label>
  );
}