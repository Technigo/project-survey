import React from 'react';

export const Radiobutton = ({ type, value, onChange, ageGroupArray }) => {
  return (
    <div className="form-group form-group-radio">
      <p tabIndex="0">Your age?</p>
      {ageGroupArray.map((group) => (
        <label htmlFor={group} key={group}>
          <input
            type={type}
            id={group}
            name={group}
            onChange={(event) => onChange(event.target.value)}
            value={group}
            checked={value === group}
          />
          {group}
        </label>
      ))}
    </div>
  );
};
