/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { Header } from 'components/Header';
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
  const handleStepIncrease = () => {
    setStep(step + 1);
  }
  return (
    <section className="outer-wrapper">
      <section className="inner-wrapper">
        <Header />
        {(step === 1) && (
          <>
            <Name name={name} setName={setName} />
            <button type="button" onClick={handleStepIncrease}> </button>
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
        {step >= 2 && step < 7 ? (
          <section className="counter">
            <p>
              Current step: {step}/6
            </p>
            <button type="button" onClick={handleStepIncrease}> </button>
          </section>
        ) : null}
      </section>
    </section>
  );
}
