import React from "react";

// text input NAME
const QuestionName = ({
  nameInput,
  onNameInputChange,
  onStepBackChange,
  onNextStepChange,
}) => {
  return (
    <>
      <section className="head-section" id="one">
        <p className="thin-intro-text">Very curious!</p>
        <h2 className="question-text">What's your name darling?</h2>
        <form onSubmit={onNextStepChange}>
          <label htmlFor="nameInput" className="sr-only">
            Name:
          </label>
          <input
            className="input-field"
            id="nameInput"
            type="text"
            placeholder="Type here"
            value={nameInput}
            onChange={onNameInputChange}
          />
        </form>
        <div className="buttons-wrapper">
          <button
            type="submit"
            onClick={onStepBackChange}
            className="btn back-btn"
          >
            back
          </button>

          <button
            type="submit"
            onClick={onNextStepChange}
            className="btn next-btn"
            disabled={nameInput === ""}
          >
            next
          </button>
        </div>
      </section>
    </>
  );
};

export default QuestionName;
