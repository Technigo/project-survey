import React from "react";

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  console.log(nameInput);
  return (
    <form className="form">
      <h2>Your name please</h2>
      <label htmlFor="nameInput">Type your name here</label>
      <input
        id="nameInput"
        type="text"
        value={nameInput}
        onChange={onNameInputChange}
      />
      <button onClick={onStepChange}>Next question</button>
    </form>
  );
};

export default FirstQuestion;
