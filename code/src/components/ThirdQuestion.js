import React from "react";

const ThirdQuestion = ({ bodyInput, onBodyInputChange, onStepChange }) => {
  return (
    <form>
      <h2>Would you rather be without elbows or without knees?</h2>
      <label htmlFor="bodyInput">Elbow</label>
      <input
        type="radio"
        value="elbow"
        onChange={onBodyInputChange}
        checked={bodyInput === "elbow"}
      />
      <span role="img" aria-label="elbow">
        💪
      </span>

      <label htmlFor="bodyInput">Knee</label>
      <input
        type="radio"
        value="knee"
        onChange={onBodyInputChange}
        checked={bodyInput === "knee"}
      />
      <span role="img" aria-label="knee">
        🥢
      </span>
      <button onClick={onStepChange}>Next Question</button>
    </form>
  );
};

export default ThirdQuestion;
