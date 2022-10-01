import React from 'react';

/* This component keeps track of the steps (page) the user is on or choose to go to
depening if the press "Next question" or "Previous question" */
export const Step = ({ step, setStep }) => {
  const handleCounterButtonClick = (shouldIncrese) => {
    if (shouldIncrese && step < 4) {
      setStep(step + 1);
    } else if (!shouldIncrese && step > 0) {
      setStep(step - 1);
    }
  }

  return (
    <div className="page-button-container">
      <div className="buttons">
        <button type="button" className="button-next" onClick={() => handleCounterButtonClick(true)}>Next question <span className="arrow" /></button>
      </div>
    </div>
  )
}

