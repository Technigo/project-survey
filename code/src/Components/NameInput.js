import React from 'react';

export const NameInput = ({ id, name, setName }) => {
  
  return (
      <label className="name-label" htmlFor={id}>
        What's your name?
        <input 
          className="name-input"
          id={id}
          type="text"
          onChange={event => setName(event.target.value)}
          value={name}
          required
        />
      </label>
  );
};