import React, { useState } from 'react';

import { Summary } from 'components/Summary';
import { LearnKnow } from './components/LearnKnow';
import { LoneTeam } from './components/LoneTeam';
import { BackFront } from './components/BackFront';

export const App = () => {
  const [step, setStep] = useState(1);

  const [learnKnow, setLearnKnow] = useState('');
  const [loneTeam, setLoneTeam] = useState('');
  const [backFront, setBackFront] = useState([]);

  const handleStepIncrease = () => {
    setStep(step + 1);
  };

  return (
    <>
      {step === 1 && (
        <LearnKnow learnKnow={learnKnow} setLearnKnow={setLearnKnow} />
      )}
      {step === 2 && (
        <LoneTeam loneTeam={loneTeam} setLoneTeam={setLoneTeam} />
      )}
      {step === 3 && (
        <BackFront backFront={backFront} setBackFront={setBackFront} />
      )}
      {step >= 4 && (
        <Summary learnKnow={learnKnow} loneTeam={loneTeam} backFront={backFront} />
      )}

      {step < 4 && (
        <section className="app">
          <p>Current step: {step}</p>
          <button type="button" onClick={handleStepIncrease}>Next step</button>
        </section>
      )}
    </>
  )
};
