import React, { useState } from 'react';

export const Select = () => {
  const [location, setLocation] = useState("");

  return (
    <>
      <h2>Your favourite city is: {location}</h2>
      <form>
        <select 
          onChange={event => setLocation(event.target.value)}
          value={location}
          >
          <option value="">Select location</option>
          <option value="london">London</option>
          <option value="stockholm">Stockholm</option>
          <option value="new york">New York</option>
          <option value="berlin">Berlin</option>
        </select>
    </form>
    </>
  );
};