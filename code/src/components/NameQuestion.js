/* eslint-disable */
import React from 'react';
import FormButtons from './FormButtons';

const NameQuestion = ({ name, callbackOnChange, step, setStep, handleSubmit, formData }) => {
  const handleNameChange = (e) => {
    callbackOnChange(e.target.name, e.target.value);
  };

  return (
    <section className='name-section'>
      <label className="name-input" htmlFor="name">
        What's your name?
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleNameChange}
          value={name}
          required
        />
      </label>
      <FormButtons
        step={step}
        setStep={setStep}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </section>
  );
};

export default NameQuestion;

