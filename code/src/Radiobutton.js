import React from 'react';

export const Radiobutton = ({
  attributeID,
  type,
  value,
  setText,
  ageGroupArray,
}) => {
  return (
    <div className="form-group form-group-radio">
      <p>Age Group:</p>
      {ageGroupArray.map((group) => (
        <label htmlFor={attributeID} key={group}>
          <input
            type={type}
            id={attributeID}
            name={attributeID}
            onChange={(event) => setText(event.target.value)}
            value={group}
            checked={value === group}
            required
          />
          {group}
        </label>
      ))}
    </div>
  );
};
