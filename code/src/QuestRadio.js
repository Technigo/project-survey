import React, { useState } from 'react';

const ageGroups = ["18-25", "19-34", "35+"];

export const Agequest = () => {
  const [ageGroup, setAgeGroup] = useState();

  return (
    <form>
      <h3>What is your age?</h3>
      {ageGroups.map(group => (
        <label key={group}>
          <input 
            type="radio"
            value={group}
            onChange={event => setAgeGroup(event.target.value)}
            checked={ageGroup === group}
          />
          {group}
        </label>
      ))}
    </form>
  );
};