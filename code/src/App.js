import React, { useState } from 'react';

import { Name } from 'components/Name';
import { WhyCute } from 'components/WhyCute';
import { PerfectJob } from 'components/PerfectJob';
import { Fondness } from 'components/Fondness';
import { Result } from 'components/Result';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [whyCute, setWhyCute] = useState('');
  const [perfectJob, setPerfectJob] = useState('');
  const [fondness, setFondness] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <>
      {/* 1 NAME - TEXT INPUT */}
      {step === 1 && (
        <Name name={name} setName={setName} />
      )}
      {/* 2 CUTEST THING - SELECT */}
      {step === 2 && (
        <WhyCute whyCute={whyCute} setWhyCute={setWhyCute} />
      )}
      {/* 3 PERFECT JOB - RADIOBOXES & TEXT INPUT */}
      {step === 3 && (
        <PerfectJob perfectJob={perfectJob} setPerfectJob={setPerfectJob} />
      )}
      {/* 4 FONDNESS - RANGE SLIDER */}
      {step === 4 && (
        <Fondness fondness={fondness} setFondness={setFondness} />
      )}
      {/* 5 DISPLAY RESULT */}
      {step >= 5 && (
        <Result name={name} whyCute={whyCute} perfectJob={perfectJob} fondness={fondness} />
      )}
      {step < 5 && (
        <>
          <p>Current step: {step}</p>
          <button type="submit" onClick={handleStepIncrease}>Next step</button>
        </>
      )}
    </>
  );
}

// exports of components to be named or not??

