/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { Name } from './components/Name';
import { Animal } from './components/Animal';
import { Color } from './components/Color';
import { Result } from './components/Result';
import { Job } from './components/Job';
import { Verb } from './components/Verb';
import { Adjective } from './components/Adjective';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [animal, setAnimal] = useState('');
  const [job, setJob] = useState('');
  const [color, setColor] = useState('');
  const [verb, setVerb] = useState('');
  const [adjective, setAdjective] = useState('');
  const [error, setError] = useState(false);
  const handleStepIncrease = () => {
    setStep(step + 1);
    setError(false);
  }
  /* const handleError = () => {
    if (name.length <= 1) {
      setError(true);
      setStep(2);
    } else if (animal.length <= 1) {
      setError(true);
      setStep(2);
    }
  } */
  return (
    <>
      {(step === 1) && (
        <>
          <h1 className="typewriter">Welcome to the MADLIBS game. Let&#39;s play a round.</h1>
          <p>Start by entering your name.</p>
          <Name name={name} setName={setName} />
        </>
      )}
      {(step === 2) && (
        <Animal animal={animal} setAnimal={setAnimal} />
      )}
      {step === 3 && (
        <Job job={job} setJob={setJob} />
      )}
      {step === 4 && (
        <Color color={color} setColor={setColor} />
      )}
      {step === 5 && (
        <Verb verb={verb} setVerb={setVerb} />
      )}
      {step === 6 && (
        <Adjective adjective={adjective} setAdjective={setAdjective} />
      )}
      {step === 7 && (
        <Result name={name} animal={animal} job={job} color={color} verb={verb} adjective={adjective} />
      )}
      {step < 7 && (
        <>
          <p>
            Current step: {step}/5
          </p>
          <button type="button" onClick={handleStepIncrease}>
            Next
          </button>
        </>
      )}
      {error && (<p>Please fill out this field.</p>)}
      {error && (<p>Field required.</p>)}
      <canvas id="particles" />
    </>
  );
}
