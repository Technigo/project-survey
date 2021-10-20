import React from "react";

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  return (
    <form>
      <label htmlFor="nameInput">What is your name?</label>
      <input
        id="nameInput"
        type="text"
        value={nameInput}
        onChange={onNameInputChange}
      />
      <button disabled={nameInput === ""} onClick={onStepChange}>
        Next question
      </button>
    </form>
  );
};

export default FirstQuestion;
