/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

import React, { useState } from 'react';
import data from './data.json';
import Starter from './components/Starter';
import Name from './components/Name';
import Type from './components/Type';
import Genre from './components/Genre';
import Summary from './components/Summary';
import Result from './components/Result';
// import Finished from './components/Finished';

export const App = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [genre, setGenre] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  };

  const handleStepReset = () => {
    setStep(0);
    setName('');
    setType('');
    setGenre('');
  };

  return (
    <div className="container main">
      {step === 0 && <Starter onButtonClick={() => handleStepIncrease(0)} />}
      {step === 1 && <Name name={name} setName={setName} step={step} />}
      {step === 2 && <Type type={type} setType={setType} step={step} />}
      {step === 3 && <Genre genre={genre} setGenre={setGenre} step={step} />}
      {step < 4 && step !== 0 && (
        <div className="step-counter">
          <p>Current step: {step}</p>
          <button type="button" onClick={handleStepIncrease}>
            Next step
          </button>
          <button type="button" onClick={handleStepReset}>
            Reset All
          </button>
        </div>
      )}
      {step === 4 && (
        <>
          <Summary name={name} type={type} genre={genre} />
          <button type="button" onClick={handleStepIncrease}>Yes!</button>
        </>
      )}
      {step === 5 && (
        <>
          <Result name={name} type={type} genre={genre} data={data} />
          <button type="button" onClick={handleStepReset}>Start over</button>
        </>
      )}
    </div>
  );
}

// Footer link: https://www.linkedin.com/in/matilda-frid-7923bb88/