import React from "react";
// insted of writing props we can add the value and onchange valuein curly brackets
const Name = ({ name, onInputChange }) => {
  return (
    <div>
      <label htmlFor="name">
        <h2> Let´s start with the basics, What your name?</h2>
      </label>
      <input id="name" type="text" value={name} onChange={onInputChange} />
    </div>
  );
};

export default Name;
