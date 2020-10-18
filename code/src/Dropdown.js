import React, { useState } from 'react';

export const Dropdown = ({ labelText, attributeID }) => {
  const [location, setLocation] = useState('');

  return (
    <div className="form-group form-group-dropdown">
      <h2>Select state is: {location}</h2>
      <label htmlFor={attributeID}>{labelText}</label>
      <select
        id={attributeID}
        name={attributeID}
        onChange={(event) => setLocation(event.target.value)}
        value={location}>
        <option value="">Select location:</option>
        <option value="Stockholm">Stockholm</option>
        <option value="Oslo">Oslo</option>
        <option value="Helsinki">Helsinki</option>
        <option value="Copenhagen">Copenhagen</option>
      </select>
    </div>
  );
};
