import React from 'react';

const UserAge = ({ age, onAgeChange }) => {
  return (
    <div className="age-slider">
      <label htmlFor="userAge">Your age</label>
      <input 
        id="userAge" 
        className="age-input" 
        type="range"
        min="18" 
        max="100" 
        onChange={event => onAgeChange(event.target.value)}
        value={age}
        />
    </div>
  )
}
export default UserAge;