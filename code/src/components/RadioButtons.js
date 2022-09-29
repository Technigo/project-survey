import React from 'react';

const alternatives = ['Hi', 'Howdy', 'Ahoy', 'Hello', 'Greetings'];

const RadioButtons = ({
  radioInput,
  handleRadioInputChange,
  handleStepChange
}) => {
  return (
    <div className="container">
      <div className="question-container">
        <h2>And what word do you prefer to be greeted with?</h2>
        <div className="greetingWords-container">
          {alternatives.map((item) => (
            <label className="radioButton-label"
              key={item}>
              <input className="radioButton-input"
                type="radio"
                value={item}
                onChange={handleRadioInputChange}
                checked={radioInput === item} />
              {item}
            </label>
          ))}
        </div>
      </div>
      <button className="button" onClick={handleStepChange}>Next</button>
    </div>
  )
}

export default RadioButtons;