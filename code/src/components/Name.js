import React from 'react';

/* is this a child component? (name component) to the parent in app.js? ? */
export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <>
      <p>What is your name?</p>
      <input type="text" value={name} onChange={handleNameChange} />
    </>
  );
}