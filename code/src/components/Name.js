import React from 'react';

export const Name = ({ setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log('Name:', event.target.value);
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setName(event.target.value);
      console.log('Name:', event.target.value);
    }
  }

  return (
    <div className="inputName">
      <p>What is your name?</p>
      <input type="text" onChange={handleNameChange} onKeyPress={handleKeyPress} />
    </div>
  );
}