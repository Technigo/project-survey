import React from 'react';

import FormButtons from './FormButtons';

const ElephantQuestion = ({ elephantOptions, callbackOnChange, step, setStep }) => {
  const handleElephantOptionsChange = (e) => {
    callbackOnChange(e.target.name, e.target.value);
  };

  return (
    <div className="elephant-container">
      <fieldset className="fieldset">
        <legend className="legend"> Would you rather ride around town on an elephant or an alpaca?</legend>

        {elephantOptions.map((option) => (
          <label
            className="elephant-label"
            key={option.value}
            htmlFor={option.value}>
            <input
              id={option.value}
              type="radio"
              value={option.value}
              onChange={handleElephantOptionsChange}
              name="selectedElephantOptions"
              className="radio-button" />
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

export default ElephantQuestion;