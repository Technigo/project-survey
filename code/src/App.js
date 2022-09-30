/* eslint max-len: ["error", { "code": 180 }] */

import React, { useState } from 'react';

import Name from 'components/Name';
import CoolestThing from 'components/CoolestThing';
import PerfectJob from 'components/PerfectJob';
import Fondness from 'components/Fondness';
import Result from 'components/Result';

const App = () => {
  const stepsTotalCount = 4
  const [step, setStep] = useState(1);
  const [name, setName] = useState('amanda');
  const [coolestThing, setCoolestThing] = useState('');
  const [perfectJob, setPerfectJob] = useState('');
  const [fondness, setFondness] = useState('');
  const [errors, setErrors] = useState(null);

  const handleStepIncrease = () => {
    if (step === 1 && name === '') {
      setErrors('Please enter your name to continue')
      return
    }
    setErrors(null)
    setStep(step + 1);
  }

  return (
    <div className="test">
      {/* 1 NAME - TEXT INPUT */}
      {step === 1 && (
        <Name name={name} setName={setName} />
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
        <Result name={name} coolestThing={coolestThing} perfectJob={perfectJob} fondness={fondness} />
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
    </div>
  );
}

export default App;