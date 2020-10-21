import React from 'react';

export const RangeSliderInput = ({age, setage}) => {

  return (
    <div className="form-question-container">
     <h2 tabIndex="0">Pick a number!</h2>
     
      <label id={age}>numbertext</label>
      <div className="slider-container">
        <input 
        className = "slider"
        type ="range" 
        min = "0" 
        max = "100"
        value = {age} 
        id = {age} 
        onChange = {(event) => setage(event.target.value)}
        />
        <output
        type="text"
        value={age}
        onChange = {(event) => setage(event.target.value)}
        htmlFor={age}
        >{age}</output>
      </div>
    </div>
     
    )
}
