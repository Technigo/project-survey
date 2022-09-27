import React from 'react';

const RadioButtons = (
    // radioInput,
    handleRadioInputChange,
    handleStepChange,
) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          value="0-18"
          onChange={handleRadioInputChange}
          checked={ageGroup === "0-18"} />
        0-18
      </label>
      <label>
        <input
          type="radio"
          value="19-30"
          onChange={handleRadioInputChange}
          checked={ageGroup === "19-30"} />
        19-30
      </label>
      <label>
        <input
          type="radio"
          value="31+"
          onChange={handleRadioInputChange}
          checked={ageGroup === "31+"} />
        31+
      </label>
      <button className="nextButton" onClick={handleStepChange}>Next</button> 
      </div>
  )
}

export default RadioButtons;