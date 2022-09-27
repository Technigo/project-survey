import React from 'react';

const alternatives = ['Cute', 'Cuter', 'Cutest'];

const RadioButtons = (
  radioInput,
  handleRadioInputChange,
  handleStepChange
) => {
  return (
    <div>
      {alternatives.map((item) => (
        <input
          type="radio"
          value={item}
          onChange={handleRadioInputChange}
          checked={radioInput === item} />

      ))}
      <button className="nextButton" onClick={handleStepChange}>Next</button>

    </div>
  )
}

export default RadioButtons;