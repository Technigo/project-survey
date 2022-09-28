import React from 'react';

const alternatives = ['Hi', 'Howdy', 'Ahoy', 'Good day', 'Hello', 'Greetings'];

const RadioButtons = ({
  radioInput,
  handleRadioInputChange,
  handleStepChange
}) => {
  return (
    <div className="container">
      <h2>And what word do you prefer to be greeted with?</h2>
      {alternatives.map((item) => (
        <label key={item}>
          <input
            type="radio"
            value={item}
            onChange={handleRadioInputChange}
            checked={radioInput === item} />
          {item}
        </label>
      ))}
      <button className="nextButton" onClick={handleStepChange}>Next</button>

    </div>
  )
}

export default RadioButtons;