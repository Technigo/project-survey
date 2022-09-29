
import React from 'react';

const ageGroups = ['18-35', '36-50', '50+'];

export const AgeGroup = ({ ageGroup, setAgeGroup }) => {
  const handleAgeGroupChange = (event) => {
    setAgeGroup(event.target.value);
  }

  return (
    <div>
      <form>
        <h2>What is your age?</h2>
        {ageGroups.map((group) => (
          <label key={group} htmlFor="ageGroup">
            <input
              id="ageGroup"
              type="radio"
              value={group}
              onChange={handleAgeGroupChange}
              checked={group === ageGroup} />
            {group}
          </label>
        ))}
      </form>
    </div>
  )
};