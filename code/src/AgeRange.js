import React from 'react';

export const Agerange = () => {
  return (
    <div className="age-range-slider">
      <label for="ageRange">Your age</label>
      <input id="ageRange" className="age-range-input" type="range" min="18" max="100" value="50"/>
    </div>
  )
}