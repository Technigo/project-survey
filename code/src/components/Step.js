import React from 'react';

export const Step = ({ step, setStep }) => {
  const handleCounterButtonClick = (shouldIncrese) => {
    if (shouldIncrese && step < 4) {
      setStep(step + 1);
    } else if (!shouldIncrese && step > 0) {
      setStep(step - 1);
    }
  }

  return (
    <>
      <div className="page-text">
       Page: {step}
      </div>
      <div className="buttons">
        <button type="button" onClick={() => handleCounterButtonClick(true)}>Next question</button>
        <button type="button" onClick={() => handleCounterButtonClick(false)}>Previous question</button>
      </div>
    </>
  )
}

