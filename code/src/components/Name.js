import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div className="introduction">
      <h2>Hi, my name is Emilia. Who are you?</h2>
      <input type="text" value={name} onChange={handleNameChange} required />
    </div>
  );
}