
import React from 'react';

const ageGroups = ['18-30', '31-40', '41-50', '50+'];

export const AgeGroup = ({ ageGroup, setAgeGroup }) => {
  const handleAgeGroupChange = (event) => {
    setAgeGroup(event.target.value);
  }

  return (
    <div className="questionWrapper">
      <form>
        <h2>What is your age?</h2>
        {ageGroups.map((group) => {
          return (
            <label
              key={group}
              htmlFor="Age group"
              className="radioButton">
              <input
                id="radio"
                type="radio"
                value={group}
                onChange={handleAgeGroupChange}
                checked={group === ageGroup} />
              {group}
            </label>
          );
        })}
      </form>
    </div>
  )
};