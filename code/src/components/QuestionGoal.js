import React from "react";
import Button from "./Button";

const QuestionGoal = ({ goal, onGoalChange }) => {
  return (
    <section className="main">
      <label htmlFor="goal-option" className="label">
        What is your main goal for this trip?
      </label>
      <input
        id="goal-option"
        name="goal-option"
        className="input"
        type="text"
        placeholder="Type your goal here"
        value={goal}
        onChange={onGoalChange}
        required
      />
      <Button button="Continue" />
    </section>
  );
};

export default QuestionGoal;
