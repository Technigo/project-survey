import React from 'react';

const RadioGroup = ({ onRadioChange, radioGroup }) => {
  const radioGroups = ['Elf', 'Dwarf', 'Orc', 'Human', 'Halfling'];

  return (
    <>
      <h2 className="question-radio" alt="radio input">
        What race are you?
      </h2>
      <div className="first-radio">
        {radioGroups.map((group) => (
          <label key={group} htmlFor={group} className="label-container">
            <input
              id={group}
              name="group"
              type="radio"
              value={group}
              required
              onChange={onRadioChange}
              checked={radioGroup === group} />
            {group}
          </label>
        ))}
      </div>
    </>
  );
};

export default RadioGroup;
