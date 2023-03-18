import React, { useState } from 'react';
import { Name } from './components/Name';
import { Experience } from './components/Experience';
import { Size } from './components/Size';
import { Summary } from './components/Summary';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');
  const [size, setSize] = useState('');

  function handleStepIncrease() {
    setStep(step + 1);
  }
  return (
    <div>
      {step === 1 && (
        <Name name={name} setName={setName}/>
      )}
      {step === 2 && (
        <Experience experience={experience} setExperience={setExperience} />
      )}
      {step === 3 && (
        <Size size={size} setSize={setSize} />
      )}
      {step >= 4 && (
        <Summary name={name} experience={experience} size={size} />
      )}
      {step < 4 &&(
      <button type="button" onClick={handleStepIncrease}>Next question</button>
      )}
    </div>
  );
}
