import React from 'react';

export const Text = ({ name, setName, askQuestion }) => {

  return(
    <div>
      <label htmlFor="userName"><h2>{askQuestion}</h2></label>
        <input
          id="userName"
          onKeyPress={event => {event.key === 'Enter' && event.preventDefault();}}
          type="text"
          onChange={event => setName(event.target.value)}
          value={name}
          placeholder="Enter name here..."
          required
          minLength="2"
        />
    </div>
  
  );
};