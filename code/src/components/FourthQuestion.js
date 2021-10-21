import React from "react";

const FourthQuestion = ({ textInput, onTextInputChange, onStepChange }) => {
  return (
    <section className="form-wrapper">
      <form>
        <h2>
          Imagine a classmate is absent from class today. How would you explain
          the lesson to him/her in three sentences?
        </h2>
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
