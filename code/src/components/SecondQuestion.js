import React from "react";

const levelGoal = [
  "select one by clicking here",
  "try to do some extra things if you can",
  "are happy if you can manage to do all of the required ones",
  "always do all of them",
  "do whatever is necessary then we will see",
];

const SecondQuestion = ({ goals, onGoalsChange, onStepChange }) => {
  return (
    <section className="form-container">
      <form>
        <h2 className="select-h2">
          Witch requirement level is your goal to reach?
        </h2>
        <label className="description" htmlFor="selectInput">
          Select one of the options
        </label>
        <div>
          <select onChange={onGoalsChange} value={goals}>
            {levelGoal.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <button onClick={onStepChange}>Next Question</button>
      </form>
    </section>
  );
};

export default SecondQuestion;
