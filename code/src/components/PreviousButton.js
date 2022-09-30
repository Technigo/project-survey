import React from 'react';

export const PreviousButton = ({ step, setStep }) => {
  const handleNavButtonsClick = (shouldIncrease) => {
    if (shouldIncrease && step < 6) {
      setStep(step + 1)
    } else if (!shouldIncrease && step > 0) {
      setStep(step - 1)
    }
  }

  return (
    <button className="navButton" type="button" value={step} onClick={() => handleNavButtonsClick(false)}>&lt;&lt; Previous Question</button>
  )
};