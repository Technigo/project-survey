import React from "react";

const ages = ["18-30", "30-45", "45-60", "65+"];

const AgeGroup = ({ onAgeGroupChange, ageGroup, onStepChange }) => {
  return (
    <div className="question-wrapper">
      <h2 className="question-header"> In which age group do you belong? </h2>

      {ages.map((group) => (
        <div key={group} className="label-container">
          <label htmlFor="age" className="label">
            <input
              id="age"
              className="input-radio"
              type="radio"
              value={group}
              onChange={onAgeGroupChange}
              checked={ageGroup === group}
            />
            {group}
          </label>
        </div>
      ))}
      <button className="button" onClick={onStepChange}>
        Next
      </button>
    </div>
  );
};

export default AgeGroup;
