import React from 'react';

const ageGroups = ['0-18', '19-30', '31-45', '46-60', '61+'];

export const Age = ({ age, setAge }) => {
  return (
    <div className="question-wrapper">
      <div className="question">
        <h2>Welcome to the New York times recycle survey of the year ♻️</h2>
        <h3>What is your Age?</h3>
        <div className="question-range">
          {ageGroups.map((ages) => (
            <label key={ages.id}>
              <input
                type="radio"
                value={ages}
                key={age.id}
                onChange={(e) => setAge(e.target.value)}
                checked={age === ages} />
              {ages}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
