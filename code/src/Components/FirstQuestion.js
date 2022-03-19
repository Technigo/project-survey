import React from "react";

const personArray = ["Solo", "With a partner", "With family", "With friends"];

const FirstQuestion = ({
  personInput,
  onPersonInputChange,
  nextQuestion,
  step,
}) => {
  return (
    <main className="main-container person">
      <p>Question number: {step}</p>
      <h3 className="question-title">How do you want to travel?</h3>
      <form className="form-container">
        {personArray.map((amount) => (
          <label className="radio-btn" htmlFor={amount} key={amount}>
            <input
              id={amount}
              type="radio"
              value={amount}
              onChange={onPersonInputChange}
              checked={amount === personInput}
            />
            {amount}
          </label>
        ))}
        <button className="next-btn" onClick={nextQuestion}>
          Next
        </button>
      </form>
    </main>
  );
};

export default FirstQuestion;
