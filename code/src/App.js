import React, { useState } from 'react';
import { Name } from 'components/Name';
import { Hear } from 'components/Hear';
import { Overall } from 'components/Overall';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [hear, setHear] = useState('');
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
        <Hear hear={hear} setHear={setHear} />
      )}
      {step === 3 && (
        <Overall overall={overall} setOverall={setOverall} />
      )}
      <p>Current Step: {step}</p>
      <button type="button" onClick={handleStepIncrease}>Next question</button>
    </>
  );
};
