import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div className="nameContainer">
      <h2>Welcome!</h2>
      <p className="question">Let´s start with your name:</p>
      <div className="nameInputContainer">
        <input className="nameInput" placeholder="Name" type="text" value={name} onChange={handleNameChange} />
      </div>
    </div>
  );
}