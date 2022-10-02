/* eslint max-len: ["error", { "code": 180 }] */

import React, { useState } from 'react';

import UserName from 'components/UserName';
import CoolestThing from 'components/CoolestThing';
import PerfectJob, { defaultPerfectJobOption } from 'components/PerfectJob';
import Fondness from 'components/Fondness';
import Summary from 'components/Summary';

const App = () => {
  const stepsTotalCount = 4
  const [step, setStep] = useState(1);
  const [userName, setUserName] = useState('');
  const [coolestThing, setCoolestThing] = useState('How cute and fluffy they are');
  const [perfectJob, setPerfectJob] = useState(defaultPerfectJobOption);
  const [fondness, setFondness] = useState(5);

  const handleStepIncrease = () => {
    if (step === 1 && userName === '') {
      return
    }
    setStep(step + 1);
  }

  return (
    <form
      className="survey"
      onSubmit={(e) => {
        e.preventDefault()
      }}>
      {/* 1 NAME - TEXT INPUT */}
      {step === 1 && (
        <UserName userName={userName} setUserName={setUserName} />
      )}
      {/* 2 COOLEST THING - SELECT */}
      {step === 2 && (
        <CoolestThing coolestThing={coolestThing} setCoolestThing={setCoolestThing} />
      )}
      {/* 3 PERFECT JOB - RADIOBUTTONS */}
      {step === 3 && (
        <PerfectJob perfectJob={perfectJob} setPerfectJob={setPerfectJob} />
      )}
      {/* 4 FONDNESS - RANGE SLIDER */}
      {step === 4 && (
        <Fondness fondness={fondness} setFondness={setFondness} />
      )}
      {/* 5 DISPLAY SUMMARY */}
      {step >= 5 && (
        <Summary userName={userName} coolestThing={coolestThing} perfectJob={perfectJob} fondness={fondness} />
      )}
      {step < 5 && (
        <>
          <button type="submit" onClick={handleStepIncrease} className="button">
            {step < stepsTotalCount ? 'Next' : 'Submit'}
          </button>
          <p className="counter-text">
            <progress value={step} max={stepsTotalCount + 1}>
              {step} of {stepsTotalCount}
            </progress>
            <span>
              Current step: <b>{step}</b> of {stepsTotalCount}
            </span>
          </p>
        </>
      )}
    </form>
  );
}

export default App;