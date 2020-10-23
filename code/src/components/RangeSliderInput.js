import React from 'react';

export const RangeSliderInput = ({age, onAgeChange}) => {

  return (
    <div className='form-question-container'>
      <h2 tabIndex='0'>What is your favourite number?</h2>
     
      <label tabIndex='0' id={age}>Pick a number here:</label>
      <div className='slider-container'>
        <input 
          className='slider'
          type='range' 
          min='1' 
          max='100'
          value={age} 
          id={age} 
          onChange={onAgeChange}
        />
        <output
          type='text'
          value={age}
          onChange={onAgeChange}
          htmlFor={age}
        >
        {age}
        </output>
      </div>
    </div>   
  )
}
