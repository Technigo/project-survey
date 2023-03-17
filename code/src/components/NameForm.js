import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div className="introduction">
      <h1>Website feedback form</h1>
      <h3>Hi, my name is Emilia. Who are you?</h3>
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
  );
}