import React from 'react';
import FormButtons from './FormButtons';

const SuperpowerQuestion = ({ superpowerOptions, callbackOnChange, step, setStep }) => {
  const handleSuperpowerOptionsChange = (e) => {
    callbackOnChange(e.target.name, e.target.value);
  };

  return (
    <div className="superpower-container">
      <fieldset className="fieldset">
        <legend className="legend">Would you rather fight 10 duck-sized horses, or 1 horse-sized duck?</legend>

        {SuperpowerOptions.map((option) => (
          <label
            className="superpower-label"
            key={option.value}
            htmlFor={option.value}>
            <input
              id={option.value}
              type="radio"
              value={option.value}
              onChange={handleSuperpowerChange}
              name="SuperpowerOptions" />
            {option.label}
          </label>
        ))}
      </fieldset>
      <FormButtons
        step={step}
        setStep={setStep} />
    </div>
  );
};

export default SuperpowerQuestion;