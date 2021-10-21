import React from "react";

const ThirdQuestion = ({ ageInput, onAgeInputChange, handleSubmit }) => {
  const ageGroup = [
    "younger than 18",
    "18-30",
    "30-45",
    "45-60",
    "older than 60",
  ];

  return (
    <form onSubmit={handleSubmit} id="thirdQuestion" className="form">
      <h2 className="page-header">third question</h2>
      <p>What is your age?</p>
      {ageGroup.map(group => (
        <div className="wrapper">
          <label className="radiobutton-container" key={group}>
            <input
              className="input"
              type="radio"
              required
              value={group}
              onChange={onAgeInputChange}
              checked={ageInput === group}
            />
            <span className="custom-radio"></span>
            {group}
          </label>
        </div>
      ))}

      <button type="submit" className="link-button">
        Next question
      </button>
    </form>
  );
};

export default ThirdQuestion;
