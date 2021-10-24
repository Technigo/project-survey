import React from "react";

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  return (
    <div className="question-container">
      <form className="form">
        <label htmlFor="nameInput">
          <h2>Hi! Type your name:</h2>
        </label>
        <input
          id="nameInput"
          type="text"
          value={nameInput}
          onChange={onNameInputChange}
        />
        <button onClick={onStepChange}>Next question</button>
      </form>
    </div>
  );
};

export default FirstQuestion;
