import React, { useState } from 'react';
import { Name } from 'components/Name';
import { LongLived } from 'components/LongLived';
import { Overall } from 'components/Overall';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [lived, setLived] = useState('');
  const [overall, setOverall] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  };

  return (
    <>
      {step === 1 && (
        <Name name={name} setName={setName} />
      )}
      {step === 2 && (
        <LongLived lived={lived} setLived={setLived} />
      )}
      {step === 3 && (
        <Overall overall={overall} setOverall={setOverall} />
      )}
      <p>Current Step: {step}</p>
      <button type="button" onClick={handleStepIncrease}>Next question</button>
    </>
  );
};
