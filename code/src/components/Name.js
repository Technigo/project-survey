import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    // <div className="inputbox">
    <div>
      <h2>Time to make a wish</h2>
      <label htmlFor="name">
        <p>Dare to dream? First type your name</p>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
      </label>
    </div>)
}

