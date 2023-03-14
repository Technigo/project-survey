import React, { useState } from 'react';

import { Name } from './components/Name';
import { Place } from './components/Place';
import { Animal } from './components/Animal';

export const App = () => {
  // useStates here
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [animal, setAnimal] = useState('');

  // Function for handeling the steps here
  const handleStepIncrease = () => {
    setStep(step + 1);
    console.log({ step })
  }

  return (
    <div>
      {step === 1 && (
        <Name name={name} setName={setName} />
      )}
      {step === 2 && (
        <Place place={place} setPlace={setPlace} />
      )}
      {step === 3 && (
        <Animal animal={animal} setAnimal={setAnimal} />
      )}
      <div>
        <button type="button" onClick={handleStepIncrease}>Next step</button>
      </div>
    </div>
  );
}
