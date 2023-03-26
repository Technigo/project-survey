import React, { useState } from 'react';
import { Name } from './components/Name';
import { Experience } from './components/Experience';
import { Size } from './components/Size';
import { Summary } from './components/Summary';
import './index.css';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');
  const [size, setSize] = useState('');

  function handleStepIncrease() {
    setStep(step + 1);
  }
  return (
    <div className="content-container">
      {step === 1 && (
        <div className="name-container">
          <Name name={name} setName={setName} />
        </div>
      )}
      {step === 2 && (
        <Experience experience={experience} setExperience={setExperience} />
      )}
      {step === 3 && (
        <>
          <Size size={size} setSize={setSize} />
          <button type="button" onClick={handleStepIncrease}>Submit</button>
        </>
      )}
      {step >= 4 && (
        <Summary name={name} experience={experience} size={size} />
      )}
      {step < 3 && (
        <button type="button" onClick={handleStepIncrease}>Next</button>
      )}
    </div>
  );
}
