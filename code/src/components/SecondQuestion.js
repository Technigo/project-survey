import React from "react";

const SecondQuestion = ({ goals, onGoalsChange, onStepChange }) => {
  return (
    <form>
      <label htmlFor="surnameInput">Type your surname</label>
      <input id="goals" type="text" value={goals} onChange={onGoalsChange} />
      <button onClick={onStepChange}>Next Question</button>
    </form>
  );
};

export default SecondQuestion;
