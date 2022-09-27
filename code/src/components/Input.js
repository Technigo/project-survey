import React, { useState } from 'react';

export const Input = ({ name, setName }) => {
  // const [name, setName] = useState('');
  // Function to store name once entered into input
  const handleInputChange = (event) => {
    setName(event.target.value);
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h2>What is your name?</h2>
      <input
        type="text"
        onChange={handleInputChange}
        value={name} />
    </form>
  );
}