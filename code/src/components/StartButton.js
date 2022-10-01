import React from 'react';

export const StartButton = ({ step, setStep }) => {
  const handleNavButtonsClick = (shouldIncrease) => {
    if (shouldIncrease && step < 6) {
      setStep(step + 1)
    } else if (!shouldIncrease && step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <button className="startButton" type="button" value={step} onClick={() => handleNavButtonsClick(true)}>START</button>
  )
};