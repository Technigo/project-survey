import React from "react";

const graduate = [
  "Thankful you made it though",
  "Surprised you made it",
  "Ready to get started",
  "Well we made it somehow",
];

const FifthQuestion = ({ graduation, onGraduationChange, onStepChange }) => {
  return (
    <form>
      <h2>How do you think you will feel at the graduation?</h2>
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

      <button onClick={onStepChange}>Submit</button>
    </form>
  );
};

export default FifthQuestion;
