import React from 'react';

const FourthQuestion = ({ ageInput, onAgeInputChange, onStepChange, onPreviousQuestionChange }) => {
    const ages = ['0-30', '31-60', '61-100']

  return (
    <section className="content-container">
      <div className="form">
        <label 
          className="label-title" 
          htmlFor="ageInput">
            What's your <span className="bold">age?*</span>
        </label>
        <div className="checkbox-container">
          {ages.map(age => (
            <label 
              className="checkbox"
              htmlFor={ages}
              aria-label={age}
              key={age}>
            <input 
              key={age}
              className="radio-input"
              type="checkbox"
              value={age} 
              onChange={(event) => onAgeInputChange(event.target.value)}
              checked={ageInput === age}
              />
              <span>{age}</span>
            </label>
          ))}
        </div>
        <div className="button-container">
          <button type="button" onClick={onPreviousQuestionChange}>&larr; Back</button>
          <button type="button" onClick={onStepChange}>Next &rarr;</button>				
        </div>
      </div>
    </section>
  );
};

export default FourthQuestion;