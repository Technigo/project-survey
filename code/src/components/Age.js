import React from 'react';

/* This component is a range input, where the user get to chose from the age groups
   and saves the value for the submit */
const ageGroups = ['0-18', '19-30', '31-45', '46-60', '61+'];

export const Age = ({ age, setAge }) => {
  return (
    <div className="question-wrapper">
      <div className="question">
        <h2 className="label" htmlFor="Age">What is your Age?</h2>
        <div className="question-range">
          {ageGroups.map((ages) => (
            <label key={ages.id} htmlFor="radio">
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
