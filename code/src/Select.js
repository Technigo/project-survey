import React, {useState} from 'react';

export const Select = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="select-container">
      <select
        onChange={(event) => setLocation(event.target.value)}
        value={location}
      >
        <option value="">Select Location</option>
        <option value="stockholm">Stockholm</option>
        <option value="madrid">Madrid</option>
        <option value="oslo">Oslo</option>
      </select> 
      </div>
  );
};