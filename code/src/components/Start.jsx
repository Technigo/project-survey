import React, { useState } from 'react'

import { Menu } from './Menu';
import { LearnKnow } from './LearnKnow';
import { LoneTeam } from './LoneTeam';
import { BackFront } from './BackFront';
import { Summary } from './Summary';

export const Start = () => {
  const [step, setStep] = useState(0);

  const [loneTeam, setLoneTeam] = useState('');
  const [learnKnow, setLearnKnow] = useState('');
  const [backFront, setBackFront] = useState('');

  const handleStepButtonClick = (nextStep) => {
    if (nextStep && step < 4) {
      setStep(step + 1);
    } else if (!nextStep && step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="outer-wrapper">
      <section className="survey-wrapper">
        {step === 0 && (
          <>
            <Menu />
            <button className="start-btn" type="button" onClick={() => handleStepButtonClick(true)}>Start survey</button>
          </>
        )}
        {step === 1 && (
          <BackFront backFront={backFront} setBackFront={setBackFront} />
        )}
        {step === 2 && (
          <LoneTeam loneTeam={loneTeam} setLoneTeam={setLoneTeam} />
        )}
        {step === 3 && (
          <LearnKnow learnKnow={learnKnow} setLearnKnow={setLearnKnow} />
        )}
        {step >= 4 && (
          <Summary learnKnow={learnKnow} loneTeam={loneTeam} backFront={backFront} />
        )}
        {step >= 1 && (
          <div className="btn-container">
            <button className="btn" type="button" onClick={() => handleStepButtonClick(false)}>Go back</button>
            <button className="btn" type="button" onClick={() => handleStepButtonClick(true)}>Next question</button>
          </div>
        )}
      </section>
    </div>
  )
};