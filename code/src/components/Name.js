import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div>
      <h2>If you could make a wish..</h2>
      <label htmlFor="name">
        <p>But first, tell me your name?</p>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
      </label>
    </div>)
}

