import React from "react";

const Name = ({ nameInput, onNameInputChange, onStepChange }) => {
  return (
    <form>
      <label htmlFor="nameInput">Type your name</label>
      <input
        id="nameInput"
        type="text"
        value={nameInput}
        onChange={onNameInputChange}
      />
      <button onClick={onStepChange}>Next questions</button>
    </form>
  );
};

export default Name;
