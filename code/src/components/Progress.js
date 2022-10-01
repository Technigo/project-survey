import React from 'react';

/* This components tracks the progress depending on what step(page)
the user is on and prints it in the footer */
export const Progress = ({ step, setStep }) => {
  const handleCounterButtonClick2 = (shouldIncrese) => {
    if (shouldIncrese && step < 4) {
      setStep(step + 1);
    } else if (!shouldIncrese && step > 0) {
      setStep(step - 1);
    }
  }
  return (
    <footer className="footer-wrapper">
      <button type="button" className="button-previous" onClick={() => handleCounterButtonClick2(false)}><span className="arrow" />  Previous question</button>
      <div className="progress-wrapper">
        <label className="label-progress" htmlFor="progress"> {step === 5 ? 'completed' : `question ${step}/4`} </label>
        <progress
          id="progress"
          tabIndex="-1"
          max="4"
          value={step} />
      </div>
    </footer>)
}

