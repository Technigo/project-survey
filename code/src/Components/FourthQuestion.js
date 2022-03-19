import React from "react";

const durationArray = ["The day", "A weekend", "Four days", "One week"];

const FourthQuestion = ({
  awayInput,
  onAwayInputChange,
  nextQuestion,
  step,
}) => {
  return (
    <main className="main-container time">
      <p>Question number: {step}</p>
      <h3 className="question-title">How long do you want to be away for?</h3>
      <form className="form-container">
        {durationArray.map((days) => (
          <label className="radio-btn" htmlFor={days} key={days}>
            <input
              id={days}
              type="radio"
              value={days}
              onChange={onAwayInputChange}
              checked={days === awayInput}
            />
            {days}
          </label>
        ))}
        <button className="next-btn" onClick={nextQuestion}>
          Next
        </button>
      </form>
    </main>
  );
};

export default FourthQuestion;
