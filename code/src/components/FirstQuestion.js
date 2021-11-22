import React from "react";

export const FirstQuestion = ({
  socialInput,
  onSocialInputChange,
  nextQuestion,
  previousQuestion,
  step,
}) => {
  return (
    <main className="main-container">
      <button
        className="back-btn"
        aria-label="Go back"
        onClick={previousQuestion}
      >
        <span class="fas fa-arrow-left"></span>
      </button>
      <form className="form-container">
        <p className="question-number">Question {step}</p>
        <label className="question-heading" htmlFor="socialInput">
          <h2 className="question-heading">SOCIAL LIFE</h2>
        </label>
        <select
          className="dropdown"
          onChange={onSocialInputChange}
          value={socialInput}
        >
          <option className="option-input" value="">
            Select
          </option>
          <option className="option-input" value="friend">
            Saw a friend
          </option>
          <option className="option-input" value="family">
            Talked to a family member
          </option>
          <option className="option-input" value="party">
            Went to a party
          </option>
          <option className="option-input" value="cinema">
            Went to a cinema/theater
          </option>
          <option className="option-input" value="dinner">
            Had dinner with someone
          </option>
        </select>
      </form>
      <button
        className="next-btn"
        disabled={socialInput === ""}
        onClick={nextQuestion}
      >
        Next
      </button>
    </main>
  );
};
