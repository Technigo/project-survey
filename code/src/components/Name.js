import React from 'react';
import './components.css';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div>
      <p className="question">Firstly, what is your name? Your full name please.</p>
      <input className="input-field" htmlFor="name" type="text" value={name} onChange={handleNameChange} />
    </div>
  );
}