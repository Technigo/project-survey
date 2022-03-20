import React from "react";

const levelGoal = [
  "I try to do some extra things if I can",
  "I'm happy if I can manage to do all of the required ones",
  "I always do all of them",
  "I do whatever is necessary then we will see",
];

const SecondQuestion = ({ goals, onGoalsChange, onStepChange }) => {
  return (
    <section className="form-container">
      <form>
        <h2>Witch requirement level is your goal to reach?</h2>
        <label className="description" htmlFor="selectInput">
          Select one of the options
        </label>
        <select onChange={onGoalsChange} value={goals}>
          {levelGoal.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <button onClick={onStepChange}>Next Question</button>
      </form>
    </section>
  );
};

export default SecondQuestion;
