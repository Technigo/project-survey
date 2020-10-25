import React from 'react';

import '../style/input-box.css'

export const Select = ({ location, setLocation, askQuestion, cityArray }) => {

  return (
    
    <div className="question-container">
      <label htmlFor="city"><h2 tabIndex="0">{askQuestion}</h2></label>
      <select 
        id="city"
        className="input-select"
        tabIndex="0"
        onChange={event => setLocation(event.target.value)}
        value={location}
      >
      {cityArray.map(city =>(
      <option key={city.value} value={city.value}>{city.text}</option> 
      ))}
      </select>
    </div>
  );
};