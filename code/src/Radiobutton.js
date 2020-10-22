import React from 'react';

export const Radiobutton = ({ id, type, value, onChange, ageGroupArray }) => {
  return (
    <div className="form-group form-group-radio">
      <p>Your age?</p>
      {ageGroupArray.map((group) => (
        <label htmlFor={group} key={group}>
          <input
            type={type}
            id={group}
            name={group}
            onChange={(event) => onChange(event.target.value)}
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
