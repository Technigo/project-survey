import React from "react";
import Button from "./Button";

const QuestionGoal = ({ goal, onGoalChange }) => {
  return (
    <>
      <label htmlFor="goal-option" className="label">
        What is your main goal for this trip?
      </label>
      <p className="examples">
        i.e. relaxation, reconnecting with nature, spotting wildlife, testing
        yourself...
      </p>
      <input
        id="goal-option"
        name="goal-option"
        className="input"
        type="text"
        placeholder="Type your name here"
        value={goal}
        onChange={onGoalChange}
        required
      />
      <Button button="Continue" />
    </>
  );
};

export default QuestionGoal;
