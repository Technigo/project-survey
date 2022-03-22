import React from "react";

const graduate = [
  "Select one by clicking here",
  "thankful you made it through",
  "surprised you made it",
  "ready to get started",
  "somehow at the finish line",
];

const FifthQuestion = ({ graduation, onGraduationChange, onStepChange }) => {
  return (
    <section className="form-container">
      <form>
        <h2 className="select-h2">
          How do you think you will feel at the graduation?
        </h2>
        <label className="description" htmlFor="selectInput">
          Select one of the options
        </label>
        <select onChange={onGraduationChange} value={graduation}>
          {graduate.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <button disabled={graduation === ""} onClick={onStepChange}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default FifthQuestion;
