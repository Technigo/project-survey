import React from "react";

export const NameQuestion = ({ name, onNameChange }) => {
  
  return (
    
    <label>
      <h2> What is your name?</h2>
      <div className="name-box">
      <input
        type="text"
        maxLength="30"
        minLength="3"
        value={name}
        onChange={event => onNameChange(event.target.value)}
        placeholder="Write your name here"
        required
      />
      </div>
    </label>
    
  );
};
