/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

import React, { useState } from 'react';
import Starter from './components/Starter';
import Name from './components/Name';
import Type from './components/Type';
// import Genre from './components/Genre';
// import Finished from './components/Finished';
// import data from 'data.json';

export const App = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  };

  const handleStepReset = () => {
    setStep(0);
  };

  return (
    <div className="container main">
      {step === 0 && <Starter onButtonClick={() => handleStepIncrease(0)} />}
      {step === 1 && <Name name={name} setName={setName} step={step} />}
      {step === 2 && <Type type={type} setType={setType} step={step} />}
      {step < 3 && step !== 0 && (
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
    </div>
  );
}

// Footer link: https://www.linkedin.com/in/matilda-frid-7923bb88/