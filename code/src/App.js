import React, { useState } from 'react';

import { Name } from 'components/Name';
import { Effect } from 'components/Effect';
import { Shape } from 'components/Shape';
import { Result } from 'components/Result';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [effect, setEffect] = useState('');
  const [shape, setShape] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <>
      {step === 1 && (
        <Name name={name} setName={setName} />
      )}
      {step === 2 && (
        <Effect effect={effect} setEffect={setEffect} />
      )}
      {step === 3 && (
        <Shape shape={shape} setShape={setShape} />
      )}
      {step >= 4 && (
        <Result name={name} effect={effect} shape={shape} />
      )}
      {step < 4 && (
        <>
          <p>Current step: {step}</p>
          <button type="button" onClick={handleStepIncrease}>Next step</button>
        </>
      )}
    </>
  );
}

