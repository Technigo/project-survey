import React from "react";

const lifeAnswers = [
  "Yes, before breakfast",
  "No, I was washing my tights",
  "Not sure, maybe a kitten",
];

const FourthQuestion = ({ lifeInput, onLifeInputChange, onStepChange }) => {
  return (
    <div className="question-container">
      <form>
        <h2>Have you saved any lifes today?</h2>
        {lifeAnswers.map((answer) => (
          <label className="radiobutton-container" key={answer}>
            <input
              type="radio"
              value={answer}
              onChange={onLifeInputChange}
              checked={lifeInput === answer}
            />
            <span className="custom-radio"></span>
            {answer}
          </label>
        ))}
        <button type="submit" onClick={onStepChange}>
          See overview
        </button>
      </form>
    </div>
  );
};

export default FourthQuestion;
