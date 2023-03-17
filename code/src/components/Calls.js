/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export const Calls = ({ calls, setCalls }) => {
  const handleCallsChange = (event) => {
    setCalls(event.target.value);
  };

  const options = [
    { value: '1-2', label: '1-2' },
    { value: '3-4', label: '3-4' },
    { value: '5-6', label: '5-6' },
    { value: '7+', label: '7+' }
  ];

  return (
    <>
      <p>How many calls per month do you like with your mentor?</p>
      {options.map((option) => (
        <label key={option.value}>
          <input
            className="radio"
            type="radio"
            name="calls"
            value={option.value}
            checked={calls === option.value}
            onChange={handleCallsChange} />

          {option.label}
        </label>
      ))}
    </>
  );
};
