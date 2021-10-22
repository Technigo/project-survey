import React from "react";

// Question that asks for the users name. Button is disabled until user fills in some text input.

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  return (
    <section className="form-wrapper">
      <form className="form-section">
        <h2>What is your name?</h2>
        <label htmlFor="nameInput"></label>
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
    </section>
  );
};

export default FirstQuestion;
