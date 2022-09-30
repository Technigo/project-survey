import React from 'react';

const ageGroups = [
  '5 - 17',
  '18 - 64',
  '65+'
]

export const Age = ({ ageGroup, setAgeGroup }) => {
  return (
    <form className="form" onSubmit={(event) => event.preventDefault()}>
      <h3 className="mainQuestion">Which age group do you belong to?</h3>
      {ageGroups.map((group) => (
        <span key={group} className="ageQuestion">
          <label className="mainQuestion" key={group}>
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