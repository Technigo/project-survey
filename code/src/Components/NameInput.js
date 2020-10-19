import React from 'react';

export const NameInput = ({ id, name, setName }) => {
  
  return (
      <label className="name-label" htmlFor={id}>
        1. What's your name?
        <input 
          className="name-input"
          id={id}
          type="text"
          onChange={event => setName(event.target.value)}
          value={name}
          placeholder="Type your first and last name here..."
          required
          requiredTxt
        />
      </label>
  );
};