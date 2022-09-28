import React from 'react';

export const NameOne = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <form>
      <p>What is your name?</p>
      <input
        type="text"
        onChange={handleNameChange}
        Value={name} />
    </form>
  )
}
