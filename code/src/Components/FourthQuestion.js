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
      <p tabindex="0">Question number: {step}</p>
      <h3 tabindex="0">How long do you want to be away for?</h3>
      <form className="form-container">
        {durationArray.map((days) => (
          <label tabindex="0" className="radio-btn" htmlFor={days} key={days}>
            <input
              id={days}
              type="radio"
              value={days}
              onChange={onAwayInputChange}
              checked={days === awayInput}
              tabindex="0"
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
