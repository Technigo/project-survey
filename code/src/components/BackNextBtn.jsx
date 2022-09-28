import React from 'react'

export const BackNextBtn = ({ step, setStep }) => {
  const handleStepButtonClick = (nextStep) => {
    if (nextStep && step < 4) {
      setStep(step + 1);
    } else if (!nextStep && step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="btn-container">
      <button className="btn" type="button" onClick={() => handleStepButtonClick(false)}>Back</button>
      <button className="btn" type="button" onClick={() => handleStepButtonClick(true)}>Next</button>
    </div>
  )
}
