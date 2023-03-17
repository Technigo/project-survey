import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    // <div>
    <div className="name-container">
      <h2>bla bla bla</h2>
      <label htmlFor="name">
        <p>Hello there, whats your name?</p>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
      </label>
    </div>)
}
/* NR 1 */