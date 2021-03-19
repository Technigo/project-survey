import React from 'react';

import FormButtons from './FormButtons';

const NameQuestion = ({ name, callbackOnChange, step, setStep }) => {

  const handleNameChange = (e) => {
    callbackOnChange(e.target.name, e.target.value);
  };

  return (
    <>
      <div className="name-container">
        <label 
          className="name-label" 
          htmlFor="name">
            So, what's your name? 
        </label>
        <input
          className="name-input-text"
          id="name"
          type="text"
          onChange={handleNameChange}
          value={name}
          name="name" 
          required
        />
      </div>
        <FormButtons 
          step={step}
          setStep={setStep}
        />
    </>
  );
};

export default NameQuestion;