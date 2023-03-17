import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div className="name-container">
      <p className="question">What is your name?</p>
      <input type="text" className="name-input" value={name} onChange={handleNameChange} />
    </div>
  );
}

