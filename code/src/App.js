import React, { useState } from 'react';

import { Age } from 'components/Age';
import { Gender } from 'components/Gender';
import { Electricity } from 'components/Electricity';
import { Result } from 'components/Result';

export const App = () => {
  const [step, setStep] = useState(1);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [electricity, setElectricity] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <>
      <h1>Are you worried about the raise in electricity costs?</h1>
      <h3>Contribute to science by answering this 2 minutes survey!</h3>
      {step === 1 && (
        <Age age={age} setAge={setAge} />
      )}
      {step === 2 && (
        <Gender gender={gender} setGender={setGender} />
      )}
      {step === 3 && (
        <Electricity electricity={electricity} setElectricity={setElectricity} />
      )}
      {step === 4 && (
        <Result age={age} gender={gender} electricity={electricity} />
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
