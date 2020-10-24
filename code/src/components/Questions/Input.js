import React from 'react';



const Input = ({ userName, onNameChange }) => {
  // (console.log(userName))
  return (
    <div className="question-card">
      <div className="question-header">
        <h3 >What would you like to call yourself?</h3>
      </div>
      <label htmlFor="userName"></label>
      <input
        type="text"
        placeholder="Tingeling"
        id="userName"
        value={userName}
        onChange={e => onNameChange(e.target.value)}
        required
      />
    </div>
  );
};


export default Input