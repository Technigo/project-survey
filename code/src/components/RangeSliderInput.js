import React from 'react';

export const RangeSliderInput = ({temperature, setTemperature}) => {

  return (
    <div className="form-question-container">
     <h2>Pick your perfect temperature!</h2>
      <input 
      type="range" 
      min="1" 
      max="100" 
      value={temperature} 
      id={temperature} 
      onChange = {(event) => setTemperature(event.target.value)}

      />
      <output
      type="text"
      value={temperature}
      onChange = {(event) => setTemperature(event.target.value)}
      for={temperature}
      >{temperature}</output>
    </div>
     
    )
}
