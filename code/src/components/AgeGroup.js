import React from "react";

const ages = ["18-30", "30-45", "45-60", "65+"];

const AgeGroup = ({ onStepChange, onAgeGroupChange, ageGroup }) => {
  return (
    <div>
      <h2> In which age group do you belong? </h2>

      {ages.map((group) => (
        <label key={group}>
          <input
            type="radio"
            value={group}
            onChange={onAgeGroupChange}
            checked={ageGroup === group}
          />
          {group}
        </label>
      ))}
      <button onClick={onStepChange}>Next</button>
    </div>
  );
};

export default AgeGroup;
