import React from 'react';
import './Name.css';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div className="name-text">
      <h1>Welcome</h1>
      <p>Please fill out this form to adopt a dog</p>
      <input type="text" id="name" value={name} placeholder="What is your name?" onChange={handleNameChange} />
    </div>
  );
}
