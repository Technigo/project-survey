import React from "react";
import "./FirstQuestion.css";

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  return (
    <form className="container">
      <label className="label-container" htmlFor="nameInput">
        What's your name?
      </label>
      <input
        className="input-container"
        id="nameInput"
        type="text"
        value={nameInput}
        onChange={onNameInputChange}
      />
      <button
        className="button"
        disabled={nameInput === ""}
        onClick={onStepChange}
      >
        Next question
      </button>
    </form>
  );
};

export default FirstQuestion;
