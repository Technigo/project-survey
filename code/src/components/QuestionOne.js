import React from "react";

// text input NAME
const QuestionOne = ({ nameInput, onNameInputChange, onStepBackChange, onNextStepChange }) => {
  return (
    <>
      <section className="head-section" id="one">
        <p className="thin-intro-text">Very curious</p>
        <h2 className="question-text">What's your name darling?</h2>
        <form>
          <label htmlFor="nameInput">Type your name here please</label>
          <input
            id="nameInput"
            type="text"
            value={nameInput}
            onChange={onNameInputChange}
          />
        </form>
      </section>
      <div className="buttons">
        <button
          type="submit"
          aria-label="Go back"
          onClick={onStepBackChange}
          className="btn back-btn"
        >
          back
        </button>

        <button
          type="submit"
          onClick={onNextStepChange}
          className="btn next-btn"
          disabled= {nameInput === ""}
        >
          next
        </button>
      </div>
    </>
  );
};

export default QuestionOne;
