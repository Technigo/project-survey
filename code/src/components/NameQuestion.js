import React from 'react';

import FormButtons from './FormButtons';

const NameQuestion = ({ name, callbackOnChange, step, setStep }) => {

  const handleNameChange = (e) => {
    callbackOnChange(e.target.name, e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="name">Your name: </label>
        <input
          id="name"
          type="text"
          onChange={handleNameChange}
          value={name}
          name="name" 
          required
        />
      </div>
      <div>
        <FormButtons 
          step={step}
          setStep={setStep}
        />
      </div>
    </>
  );
};

export default NameQuestion;