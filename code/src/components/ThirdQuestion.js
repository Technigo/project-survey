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
    <form className="form">
      <h2 className="page-header">third question</h2>
      <p>What is your age?</p>
      {ageGroup.map(group => (
        <label className="label" key={group}>
          <input
            className="input"
            type="radio"
            required
            value={group}
            onChange={onAgeInputChange}
            checked={ageInput === group}
          />
          {group}
        </label>
      ))}

      <a className="button-container" onClick={onStepChange}>
        <img className="button-icon" src="./img/chevron.png" alt=""></img>
      </a>
    </form>
  );
};

export default ThirdQuestion;
