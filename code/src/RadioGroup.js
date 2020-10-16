import React, {useState} from 'react';

const ageGroups = ["0-18", "19-30", "30+"];

export const RadioGroup = () => {
  const [ageGroup, setAgeGroup] = useState();

  return (
     <div className="radio-container">
         {ageGroups.map((group) => (
        <label key={group}>
          <input
            type="radio"
            value={group}
            onChange={(event) => setAgeGroup(event.target.value)}
            checked={ageGroup === group}
          />
          {group}
        </label>
      ))}
     </div>
  );
}