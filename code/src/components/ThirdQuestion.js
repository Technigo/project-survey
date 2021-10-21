import React from "react";

const ThirdQuestion = ({ themeInput, onThemeInputChange, onStepChange }) => {
  return (
    <form>
      <label htmlFor="themeInput">What´s your theme song?</label>
      <select id="themeInput" value={themeInput} onChange={onThemeInputChange}>
        <option value="">Select theme:</option>
        <option value="The Flash Theme">The Flash Theme</option>
        <option value="Wonder Woman Theme">Wonder Woman Theme</option>
        <option value="Teenage Mutant Ninja Turtles Theme">
          Teenage Mutant Ninja Turtles Theme
        </option>
      </select>
      <button onClick={onStepChange}>Next question</button>
    </form>
  );
};

export default ThirdQuestion;
