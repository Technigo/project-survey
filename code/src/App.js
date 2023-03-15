import React, { useState } from 'react';

export const App = () => {
  const [step, setStep] = useState(1);

  const handleStepincrease = () => {
    setStep(step + 1);
  }
  return (
    <>
    
    <p>Current step: {step}</p>
    <button type="button" onClick={handleStepIncrease}>Next</button>
    </>
  );
}
