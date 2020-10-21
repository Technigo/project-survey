import React, { useState } from 'react';

const ageGroups = ["0-18", "19-30", "31-50", "Over 50"];

export const Radio = () => {
  const [ageGroup, setAgeGroup] = useState();
    
  return (
      <>
        <h2>Your age group is: {ageGroup}</h2>
        <form>
          Age Group:
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
      </>
    );
};
