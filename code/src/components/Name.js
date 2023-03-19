import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div className="name-container">
      <div className="question">what is your name?
        <input type="text" className="name-input" value={name} onChange={handleNameChange} />
      </div>
    </div>
  );
}