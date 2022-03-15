import React from "react";

// text input NAME
const QuestionOne = ({ nameInput, onNameInputChange, onStepBackChange, onNextStepChange }) => {
  return (
    <>
      <section className="section" id="one">
        <h1>Header for question one</h1>
        <form>
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
          href="#two"
          className="btn"
        >
          back
        </button>

        <button
          type="submit"
          onClick={onNextStepChange}
          href="#two"
          className="btn"
        >
          next
        </button>
      </div>
    </>
  );
};

export default QuestionOne;
