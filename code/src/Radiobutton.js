import React, { useState } from 'react';

const ageGroups = ['0-18', '19-30', '30+'];

export const Radiobutton = ({
  labelTextOne,
  labelTextTwo,
  attributeID,
  type,
}) => {
  const [ageGroup, setAgeGroup] = useState();

  return (
    <div className="form-group form-group-radio">
      <h2>Radio state is: {ageGroup}</h2>
      <p>Age Group:</p>
      {ageGroups.map((group) => (
        <label htmlFor={attributeID} key={group}>
          <input
            type={type}
            id={attributeID}
            name={attributeID}
            required
            onChange={(event) => setAgeGroup(event.target.value)}
            value={group}
            checked={ageGroup === group}
          />
          {group}
        </label>
      ))}
    </div>
  );
};
