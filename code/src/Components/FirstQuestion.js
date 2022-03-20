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
      <p tabindex="0">Question number: {step}</p>
      <h3 tabindex="0">How do you want to travel?</h3>
      <form className="form-container">
        {personArray.map((amount) => (
          <label tabIndex="0" className="radio-btn" htmlFor={amount} key={amount}>
            <input 
              id={amount}
              type="radio"
              value={amount}
              onChange={onPersonInputChange}
              checked={amount === personInput}
              tabindex="0"
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
