import React from 'react';

const UserAge = ({ userAge, onAgeChange }) => {
  return (
    <div className="section-user-age" id="sectionUserAge">
      <label htmlFor="userAge">Your age: <span className="user-age">{userAge}</span></label>
      <input 
        id="userAge" 
        className="age-input" 
        type="range"
        step="1"
        min="18"
        max="100"
        onChange={event => onAgeChange(event.target.value)}
        value={userAge}
      />
    </div>
  )
}
export default UserAge;