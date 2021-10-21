import React from "react";
import "./ThirdQuestion.css";

const ThirdQuestion = ({ ageGroup, onAgeGroupChange, onStepChange }) => {
  const ageGroups = ["0-18", "19-30", "30+"];
  return (
    <form className="container">
      <h3 className="age-header">How old are you?</h3>
      {ageGroups.map((group) => (
        <label className="label-age-container" key={group}>
          <input
            type="radio"
            value={group}
            checked={ageGroup === group}
            onChange={onAgeGroupChange}
          />
          {group}
        </label>
      ))}
      <button
        className="button"
        disabled={ageGroup === ""}
        onClick={onStepChange}
      >
        Next question
      </button>
    </form>
  );
};

export default ThirdQuestion;
