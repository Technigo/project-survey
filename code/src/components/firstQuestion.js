import React from "react";
import "./questions.css";

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  console.log(nameInput);
  return (
    <form className="question-container">
      <label htmlFor="nameInput">What's your name?</label>
      <input
        className="question-input"
        id="nameInput"
        type="text"
        value={nameInput}
        onChange={onNameInputChange}
      />
      <button
        className="submit-button"
        disabled={nameInput === ""}
        onClick={onStepChange}
      >
        Next question
      </button>
    </form>
  );
};

export default FirstQuestion;
