import React from 'react';

import FormButtons from './FormButtons';

const HorseQuestion = ({ horseOptions, callbackOnChange, step, setStep }) => {
  const handleHorseOptionsChange = (e) => {
    callbackOnChange(e.target.name, e.target.value);
  };

  return (
    <div className="horse-container">
      <fieldset className="fieldset">
        <legend className="legend">Would you rather fight 10 duck-sized horses, or 1 horse-sized duck?</legend>

        {horseOptions.map((option) => (
          <label
            className="horse-label"
            key={option.value}
            htmlFor={option.value}>
            <input
              id={option.value}
              type="radio"
              value={option.value}
              onChange={handleHorseOptionsChange}
              name="horseOptions"
              required />
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

export default HorseQuestion;
