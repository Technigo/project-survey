import React from "react";

const ThirdQuestion = ({ ageGroup, onAgeGroupChange, onStepChange }) => {
  const ageGroups = ["0-18", "19-30", "30+"];
  return (
    <form>
      Age Group:
      {ageGroups.map((group) => (
        <label key={group}>
          <input
            type="radio"
            value={group}
            checked={ageGroup === group}
            onChange={onAgeGroupChange}
          />
          {group}
        </label>
      ))}
      <button onClick={onStepChange}>Next question </button>
    </form>
  );
};

export default ThirdQuestion;
