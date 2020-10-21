import React from 'react';

export const Radiobutton = ({ id, type, value, onChange, ageGroupArray }) => {
  return (
    <div className="form-group form-group-radio">
      <p>What is your age?</p>
      {ageGroupArray.map((group) => (
        <label htmlFor={id} key={group}>
          <input
            type={type}
            id={id}
            name={id}
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
