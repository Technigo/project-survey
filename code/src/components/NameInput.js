import React from 'react';

const NameInput = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <label htmlFor="name" className="name-label">
      <h2>Welcome, please let me know your name:</h2>
      <input
        id="name"
        type="text"
        placeholder="Your name"
        required
        value={name}
        onChange={handleNameChange}
        className="input-field" />
      <div className="button-container" />
    </label>
  )
}

export default NameInput;