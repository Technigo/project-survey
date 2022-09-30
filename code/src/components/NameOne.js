import React from 'react';

export const NameOne = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <form>
      <h2>What is your name?</h2>
      <input
        className="inputClass"
        type="text"
        onChange={handleNameChange}
        Value={name} />
    </form>
  )
}
