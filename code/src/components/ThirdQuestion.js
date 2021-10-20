import React from "react";
import "./ThirdQuestion.css";

const ThirdQuestion = ({ ageGroup, onAgeGroupChange, onStepChange }) => {
  const ageGroups = ["0-18", "19-30", "30+"];
  return (
    <form className="container">
      How old are you?
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
        disable={ageGroup === ""}
        onClick={onStepChange}
      >
        Next question{" "}
      </button>
    </form>
  );
};

export default ThirdQuestion;
