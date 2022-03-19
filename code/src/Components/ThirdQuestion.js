import React from "react";

const budgetArray = ["0-2000 kr", "2000-5000 kr", "5000-10000 kr"];

const ThirdQuestion = ({
  budgetInput,
  onBudgetInputChange,
  nextQuestion,
  step,
}) => {
  return (
    <main className="main-container budget">
      <p>Question number: {step}</p>
      <h3 className="question-title">Budget for the destination:</h3>
      <form className="form-container">
        {budgetArray.map((budget) => (
          <label className="radio-btn" htmlFor={budget} key={budget}>
            <input
              id={budget}
              type="radio"
              value={budget}
              onChange={onBudgetInputChange}
              checked={budget === budgetInput}
            />
            {budget}
          </label>
        ))}
        <button className="next-btn" onClick={nextQuestion}>
          Next
        </button>
      </form>
    </main>
  );
};

export default ThirdQuestion;
