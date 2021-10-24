import React from "react";

const ThirdQuestion = ({ themeInput, onThemeInputChange, onStepChange }) => {
  return (
    <div className="question-container">
      <form>
        <label htmlFor="themeInput">
          <h2>What´s your theme song?</h2>
        </label>
        <select
          id="themeInput"
          value={themeInput}
          onChange={onThemeInputChange}
        >
          <option value="">Select theme:</option>
          <option value="The Flash Theme">The Flash Theme</option>
          <option value="Wonder Woman Theme">Wonder Woman Theme</option>
          <option value="Teenage Mutant Ninja Turtles Theme">
            Teenage Mutant Ninja Turtles Theme
          </option>
        </select>
        <button onClick={onStepChange}>Next question</button>
      </form>
    </div>
  );
};

export default ThirdQuestion;
