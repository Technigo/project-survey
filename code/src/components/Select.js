import React from 'react';

import '../style/input-box.css'

export const Select = ({ location, setLocation, askQuestion, cityArray, handleLocationChange }) => {

  return (
    
    <div className="question-container">
      <label tabIndex="0" htmlFor="city"><h2>{askQuestion}</h2></label>
      <select 
        id="city"
        className="input-select"
        tabIndex="0"
        onChange={handleLocationChange}
        value={location}
      >
      {cityArray.map(city =>(
      <option key={city.value} value={city.value}>{city.text}</option> 
      ))}
      </select>
    </div>
  );
};