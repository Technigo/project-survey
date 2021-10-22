import React from "react";
import "./ThirdQuestion.css";
import ButtonNextPage from "./ButtonNextPage";

const ThirdQuestion = ({ ageInput, onAgeInputChange, handleSubmit }) => {
  const ageGroup = [
    "Go for a run",
    "That will never happen",
    'Stare into nothing aka "meditate"',
    "Code, doh!",
    "Ice-cream",
  ];

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="page-header">You have one hour off..</h2>
      <p>..what will you do?</p>
      {ageGroup.map(group => (
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
          <p>{group}</p>
        </label>
      ))}

      <ButtonNextPage />
    </form>
  );
};

export default ThirdQuestion;
