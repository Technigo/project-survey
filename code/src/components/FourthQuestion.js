import React from "react";

const FourthQuestion = ({ textInput, onTextInputChange, onStepChange }) => {
  return (
    <section className="form-wrapper">
      <form>
        <h2>How would you explain the class in ten words or less?</h2>
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
