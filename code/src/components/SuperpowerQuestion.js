import React from 'react';
import FormButtons from './FormButtons';

const SuperpowerQuestion = ({ superpowerOptions, callbackOnChange, step, setStep }) => {
  const handleSuperpowerOptionsChange = (e) => {
    callbackOnChange(e.target.name, e.target.value);
  };

  return (
    <div className="superpower-container">
      <fieldset className="fieldset">
        <legend className="legend">14. Would you rather be able to move objects with your mind or have the ability to temporarily mute annoying people in real life?</legend>

        {superpowerOptions.map((option) => (
          <label
            className="superpower-label"
            key={option.value}
            htmlFor={option.value}>
            <input
              id={option.value}
              type="radio"
              value={option.value}
              onChange={handleSuperpowerOptionsChange}
              name="SuperpowerOptions"
              required
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

export default SuperpowerQuestion;