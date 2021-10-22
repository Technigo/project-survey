import React from "react";

// Here the user is asked to submit a question. Same structure as the fourth question

const FifthQuestion = ({
  questionInput,
  onQuestionInputChange,
  onStepChange,
}) => {
  return (
    <section className="form-wrapper">
      <form className="form-section">
        <h2>Submit a question you would like me to answer:</h2>
        <label htmlFor="questionInput"></label>
        <input
          id="questionInput"
          type="text"
          value={questionInput}
          onChange={onQuestionInputChange}
        />
        <button disabled={questionInput === ""} onClick={onStepChange}>
          Submit exit ticket
        </button>
      </form>
    </section>
  );
};

export default FifthQuestion;
