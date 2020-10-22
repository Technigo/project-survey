import React from "react";

export const NameQuestion = ({ name, setName }) => {
  return (
    
    <label>
      <h2> What is your name?</h2>
      <div className="name-box">
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
        placeholder="Write your name here"
        required
      />
      </div>
    </label>
    
  );
};
