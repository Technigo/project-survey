import React, { useState } from 'react';

export const App = () => {
  const [step, setStep] = useState(1);

  const [learnKnow, setLearnKnow] = useState('');
  const [backFront, setBackFront] = useState('');
  const [loneTeam, setLoneTeam] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  };

  return (
    <section className="app">
      <p>Current step: {step}</p>
      <button type="button" onClick={handleStepIncrease}>Next step</button>
    </section>
  )
};
