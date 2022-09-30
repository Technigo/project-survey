import React from 'react';

export const SubmitButton = ({ step, setStep }) => {
  const handleNavButtonsClick = (shouldIncrease) => {
    if (shouldIncrease && step < 6) {
      setStep(step + 1)
    } else if (!shouldIncrease && step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="submit">
      <input className="navButton" type="submit" value="Submit &gt;&gt;" onClick={() => handleNavButtonsClick(true)} />
    </div>
  )
};