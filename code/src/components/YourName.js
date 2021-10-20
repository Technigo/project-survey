import React from "react";

const YourName = ({ name, onNameChange, onStepChange }) => {
  return (
    <form className="name-container">
      <label htmlFor="nameInput">Name:</label>
      <input id="nameInput" type="text" value={name} onChange={onNameChange} />

      <button onClick={onStepChange}>Next question</button>
    </form>
  );
};

export default YourName;
