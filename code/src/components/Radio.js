import React from 'react';

import '../style/radio.css';

export const Radio = ({ ageGroup, setAgeGroup, ageGroupsArray, askQuestion }) => {
  
  return (
      <>
        <h2 tabIndex="0">{askQuestion}</h2>
        <div className="radio-container" >
          {ageGroupsArray.map(group => (
          
              <label
                key={group}
                htmlFor={group}
                tabIndex="0"
              >
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
