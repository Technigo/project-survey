/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Name } from './components/Name';
import { Age } from './components/Age';
import { Gender } from './components/Gender';
import { Result } from './components/Result';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [error, setError] = useState(false);
  const handleStepIncrease = () => {
    setStep(step + 1);
    setError(false);
    if (name.length <= 1) {
      setError(true);
      setStep(1);
    } else if (age <= -1) {
      setError(true);
      setStep(2);
    }
  }
  return (
    <>
      {(step === 1) && (
        <Name name={name} setName={setName} />
      )}
      {step === 2 && (
        <Age age={age} setAge={setAge} />
      )}
      {step === 3 && (
        <Gender gender={gender} setGender={setGender} />
      )}
      {step === 4 && (
        <Result name={name} age={age} gender={gender} />
      )}
      {step < 4 && (
        <>
          <p>
            Current step: {step}
          </p>
          <button type="button" onClick={handleStepIncrease}>
            Next step
          </button>
        </>
      )}
      {error && (<p>Please fill out this field.</p>)}
      {error && (<p>Field required.</p>)}
    </>
  );
}
