import React from "react";

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  return (
    <section className="form-wrapper">
      <form>
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
