import React from 'react';

export const Select = ({ value, setLocation, askQuestion }) => {

  return (
    <>
      <h2>{askQuestion}</h2>
      <div>
        <select 
          onChange={event => setLocation(event.target.value)}
          value={value}
          >
          <option value="">Select location</option>
          <option value="london">London</option>
          <option value="stockholm">Stockholm</option>
          <option value="new york">New York</option>
          <option value="berlin">Berlin</option>
        </select>
      </div>
    </>
  );
};