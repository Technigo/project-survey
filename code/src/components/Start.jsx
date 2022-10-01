import React, { useState } from 'react';

import { Menu } from './Menu';
import { BackNextBtn } from './BackNextBtn';
import { BackFront } from './BackFront';
import { LoneTeam } from './LoneTeam';
import { LearnKnow } from './LearnKnow';
import { Summary } from './Summary';

export const Start = () => {
  const [step, setStep] = useState(0);
  const [backFront, setBackFront] = useState('');
  const [loneTeam, setLoneTeam] = useState('');
  const [learnKnow, setLearnKnow] = useState('');

  return (
    <div className="outer-wrapper">
      <section className="survey-wrapper">
        {step === 0 && (
          <Menu step={step} setStep={setStep} />
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
          <Summary backFront={backFront} loneTeam={loneTeam} learnKnow={learnKnow} />
        )}
        {step > 0 && step < 4 && (
          <BackNextBtn
            step={step}
            setStep={setStep}
            backFront={backFront}
            loneTeam={loneTeam}
            learnKnow={learnKnow} />
        )}
      </section>
    </div>
  );
};