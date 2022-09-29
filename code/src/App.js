import React, { useState } from 'react';
import { Name } from 'Components/Name';
import { Sandwich } from 'Components/Sandwich';
import { Pancakes } from 'Components/Pancakes'
import { Drink } from 'Components/Drink';
import { Result } from 'Components/Result';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [sandwich, setSandwich] = useState('');
  const [pancakes, setPancakes] = useState('');
  const [drink, setDrink] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <>
      {step === 1 && (
        <Name name={name} setName={setName} />
      )}
      {step === 2 && (
        <Sandwich sandwich={sandwich} setSandwich={setSandwich} />
      )}
      {step === 3 && (
        <Pancakes pancakes={pancakes} setPancakes={setPancakes} />
      )}
      {step === 4 && (
        <Pancakes drink={drink} setDrink={setDrink} />
      )}
      {step >= 5 && (
        <Result name={name} sandwich={sandwich} pancakes={pancakes} drink={drink} />
      )}

      {step < 5 && (
        <>
          <p>Current step: {step}</p>
          <button type="button" onClick={handleStepIncrease}>Next step</button>
        </>
      )}
    </>
  );
}
