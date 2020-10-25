import React from 'react';

import '../style/radio.css';

export const Radio = ({ ageGroup, setAgeGroup, ageGroupsArray, askQuestion }) => {
  
  return (
      <>
        <h2>{askQuestion}</h2>
        <div className="radio-container" >
          {ageGroupsArray.map(group => (
          
              <label
              key={group}>
                <input
                  type="radio"
                  value={group}
                  onChange={event => setAgeGroup(event.target.value)}
                  checked={ageGroup === group}
                />
                {group}
              </label>
            
          ))}          
        </div>
      </>
    );
};
