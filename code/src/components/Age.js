import React from 'react';

const ageGroups = [
  '5 - 17',
  '18 - 64',
  '65+'
]

export const Age = ({ ageGroup, setAgeGroup }) => {
  return (
    <form className="ageGroup" onSubmit={(event) => event.preventDefault()}>
      <h2>Which age group do you belong to?</h2>
      {ageGroups.map((group) => (
        <span key={group}>
          <label key={group}>
            <input
              type="radio"
              value={group}
              onChange={(event) => setAgeGroup(event.target.value)}
              checked={ageGroup === group} />
            {group}
          </label>
        </span>
      ))}
    </form>
  );
}