import React from "react";

const ThirdQuestion = ({ ageInput, onAgeInputChange, onStepChange }) => {
  const ageGroup = [
    "younger than 18",
    "18-30",
    "30-45",
    "45-60",
    "older than 60",
  ];

  return (
    <form>
      <h2>third question</h2>
      <p>What is your age?</p>
      {ageGroup.map(group => (
        <label key={group}>
          <input
            type="radio"
            value={group}
            onChange={onAgeInputChange}
            checked={ageInput === group}
          />
          {group}
        </label>
      ))}

      <button onClick={onStepChange}>Go to summary</button>
    </form>
  );
};

export default ThirdQuestion;
