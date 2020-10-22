import React from 'react';

//const ageGroups = ["0-18", "19-30", "31-50", "Over 50"];

export const Radio = ({ ageGroup, setAgeGroup, ageGroupsArray }) => {
  //const [ageGroup, setAgeGroup] = useState();
  //const [ageGroup, setAgeGroup, ageGroupsArray] = props
  return (
      <>
        <h2>Your age group is: {ageGroup}</h2>
        
          Age Group:
          {ageGroupsArray.map(group => (
            <div className="radio-container" key={group}>
              <label>
                <input
                  type="radio"
                  value={group}
                  onChange={event => setAgeGroup(event.target.value)}
                  checked={ageGroup === group}
                />
                {group}
              </label>
            </div>
          ))}          
        
      </>
    );
};
