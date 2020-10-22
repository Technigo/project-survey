import React from 'react';

export const Select = ({ value, setLocation }) => {
  //const [location, setLocation] = useState("");
  //const [value, setLocation] = props;

  return (
    <>
      <h2>Your favourite city is: {value}</h2>
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