import React, { useState } from 'react';
import { Name } from './components/Name'
import { Start } from './components/Start'
import { Activity } from './components/Activity'
import { Colour } from './components/Colour'
import { Place } from './components/Place'
import { Breathe } from './components/Breathe'

export const App = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [activity, setActivity] = useState('');
  const [colour, setColour] = useState('');
  const [place, setPlace] = useState('');
  const [breathe, setBreathe] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }
  return (
    <>
      {step === 0 && (
        <Start onButtonClick={() => handleStepIncrease(0)} />
      )}
      {step === 1 && (
        <Name name={name} setName={setName} step={step} />
      )}
      {step === 2 && (
        <Activity activity={activity} setActivity={setActivity} step={step} />
      )}
      {step === 3 && (
        <Colour colour={colour} setColour={setColour} step={step} />
      )}
      {step === 4 && (
        <Place place={place} setPlace={setPlace} step={step} />
      )}
      {step === 5 && (
        <Breathe breathe={breathe} setBreathe={setBreathe} step={step} />
      )}
      {step < 6 && step !== 0 && (
        <button type="button" onClick={handleStepIncrease}> Next question </button>
      )}
    </>
  );
}
