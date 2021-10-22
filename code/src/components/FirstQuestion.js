import React from "react";

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  return (
    <form>
      <h1>kicks and giggles</h1>
      <label htmlFor="nameInput">What's your name?</label>
      <input
        id="nameInput"
        type="text"
        value={nameInput}
        onChange={onNameInputChange}
      />
      <button disabled={nameInput === ""} onClick={onStepChange}>
        Next Question
      </button>
    </form>
  );
};

export default FirstQuestion;
