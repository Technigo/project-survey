import React from "react";

// text input NAME
const QuestionOne = ({ nameInput, onNameInputChange, onStepBackChange, onNextStepChange }) => {
  return (
    <>
    <main>
      <section className="head-section" id="one">
        <p>Question one</p>
        <h2 className="header-text">Very curious - What's your name darling?</h2>
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
          className="back-btn"
        >
          back
        </button>

        <button
          type="submit"
          onClick={onNextStepChange}
          className="next-btn"
          disabled= {nameInput === ""}
        >
          next
        </button>
      </div>
      </main>
    </>
  );
};

export default QuestionOne;
