import React from 'react';

export const NameInput = ({ name, setName }) => {
  
  return (
      <label>
        What's your name?
        <input 
          type="text"
          onChange={event => setName(event.target.value)}
          value={name}
          required
        />
      </label>
  );
};