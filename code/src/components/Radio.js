import React from 'react';
import './radio.css';

//const ageGroups = ["0-18", "19-30", "31-50", "Over 50"];

export const Radio = ({ ageGroup, setAgeGroup, ageGroupsArray }) => {
  //const [ageGroup, setAgeGroup] = useState();
  //const [ageGroup, setAgeGroup, ageGroupsArray] = props
  return (
      <>
        <h2>Your age group is: {ageGroup}</h2>
        <div className="radio-container" >
          Age Group:
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
