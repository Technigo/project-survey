/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

// This is the firstquestion thats comes up

const ageGroups = [
  '15-25',
  '26-35',
  '36-45',
  '46-60',
  '60+'
];

const AgeQuestion = () => {
  const [ageGroup, setAgeGroup] = useState();

  return (
    <form>
      <h3>Age group</h3>
      {ageGroups.map((group) => (
        <label key={group}>
          <input
            type="radio"
            value={group}
            onChange={(event) => setAgeGroup(event.target.value)}
            checked={ageGroup === group} />
          {group}

        </label>))}
      <p>Your age group is {ageGroup} years old</p>
    </form>
  );
}

export default AgeQuestion
