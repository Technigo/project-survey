import React, { useState } from 'react';
import { Name } from './Components/Name';
import { Food } from './Components/Food';
import { Drink } from './Components/Drink';
import { Result } from './Components/Result';
import { Seasons } from './Components/Seasons';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [food, setFood] = useState('');
  const [drink, setDrink] = useState('');
  const [seasons, setSeasons] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }
  return (
    <>
      {step === 1 && (
        <Name name={name} setName={setName} />
      )}
      {step === 2 && (
        <Food food={food} setFood={setFood} />
      )}
      {step === 3 && (
        <Drink drink={drink} setDrink={setDrink} />
      )}
      {step === 4 && (
        <Seasons seasons={seasons} setSeasons={setSeasons} />
      )}
      {step >= 5 && (
        <Result name={name} food={food} drink={drink} season={seasons}/>
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