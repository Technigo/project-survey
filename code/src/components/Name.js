/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React from 'react';
import './Name.css';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('enter')
    }
  }

  return (
    <div className="name-text">
      <input type="text" id="name" value={name} placeholder="What is your name?" onChange={handleNameChange} onKeyDown={(e) => handleKeyDown(e)} />
    </div>
  );
}

export default Name;