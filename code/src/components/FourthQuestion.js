import React from "react";

const lifeAnswers = [
  "Yes, before breakfast",
  "No, I was washing my tights",
  "Not sure, maybe a kitten",
];

const FourthQuestion = ({ lifeInput, onLifeInputChange, onStepChange }) => {
  return (
    <form>
      Have you saved any lifes today?
      {lifeAnswers.map((answer) => (
        <label key={answer}>
          <input
            type="radio"
            value={answer}
            onChange={onLifeInputChange}
            checked={lifeInput === answer}
          />
          {answer}
        </label>
      ))}
      <button type="submit" onClick={onStepChange}>
        See overview
      </button>
    </form>
  );
};

export default FourthQuestion;
