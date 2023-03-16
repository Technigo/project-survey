import React from 'react';
import './components.css';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div className="page-name">
      <p className="question">Firstly, what is your name?</p>
      <input className="input-field" type="text" value={name} onChange={handleNameChange} />
    </div>
  );
}