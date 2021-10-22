import React from "react";

// Question with text input asking about one thing the user has learned

const FourthQuestion = ({ textInput, onTextInputChange, onStepChange }) => {
  return (
    <section className="form-wrapper">
      <form className="form-section">
        <h2>Write one thing that you have learned:</h2>
        <label htmlFor="textInput"></label>
        <input
          id="textInput"
          type="text"
          value={textInput}
          onChange={onTextInputChange}
        />
        <button disabled={textInput === ""} onClick={onStepChange}>
          Next question
        </button>
      </form>
    </section>
  );
};

export default FourthQuestion;
