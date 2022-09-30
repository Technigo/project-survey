/* eslint max-len: ["error", { "code": 180 }] */

import React, { useState } from 'react';

import UserName from 'components/UserName';
import CoolestThing from 'components/CoolestThing';
import PerfectJob, { defaultPerfectJobOption } from 'components/PerfectJob';
import Fondness from 'components/Fondness';
import Result from 'components/Result';

const App = () => {
  const stepsTotalCount = 4
  const [step, setStep] = useState(1);
  const [userName, setUserName] = useState('Name Namesson');
  const [coolestThing, setCoolestThing] = useState('How cute and fluffy they are');
  const [perfectJob, setPerfectJob] = useState(defaultPerfectJobOption);
  const [fondness, setFondness] = useState(1);
  const [errors, setErrors] = useState(null);

  const handleStepIncrease = () => {
    if (step === 1 && userName === '') {
      setErrors('Please enter your name to continue')
      return
    }
    setErrors(null)
    setStep(step + 1);
  }

  return (
    <>
      {/* 1 NAME - TEXT INPUT */}
      {step === 1 && (
        <UserName userName={userName} setUserName={setUserName} />
      )}
      {/* 2 COOLEST THING - SELECT */}
      {step === 2 && (
        <CoolestThing coolestThing={coolestThing} setCoolestThing={setCoolestThing} />
      )}
      {/* 3 PERFECT JOB - RADIOBUTTONS & TEXT INPUT */}
      {step === 3 && (
        <PerfectJob perfectJob={perfectJob} setPerfectJob={setPerfectJob} />
      )}
      {/* 4 FONDNESS - RANGE SLIDER */}
      {step === 4 && (
        <Fondness fondness={fondness} setFondness={setFondness} />
      )}
      {/* 5 DISPLAY RESULT */}
      {step >= 5 && (
        <Result userName={setUserName} coolestThing={coolestThing} perfectJob={perfectJob} fondness={fondness} />
      )}
      {step < 5 && (
        <>

          {errors && (
            <p style={{ color: 'red' }}>
              {errors}
            </p>
          )}

          <p>Current step: {step} of {stepsTotalCount}</p>
          <button type="button" onClick={handleStepIncrease}>
            {step < stepsTotalCount ? 'Next' : 'Submit'}
          </button>
        </>
      )}
    </>
  );
}

export default App;