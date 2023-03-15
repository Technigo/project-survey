import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div>
      <label htmlFor="name">
        <p className="question">Dare to dream? First type your name</p>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
      </label>
    </div>)
}

