import React, { useState } from 'react';
import { Name } from './Components/Name';
import { Food } from './Components/Food';
import { Drink } from './Components/Drink';
import { Result } from './Components/Result';


export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [food, setFood] = useState('');
  const [drink, setDrink] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <div>
      {step === 1 && (
        <Name name={name} setName={setName} />
      )}
      {
        step === 2 && (
          <Food food={food} setFood={setFood} />
        )
      }
      {
        step === 3 && (
          <Drink drink={drink} setDrink={setDrink} />
        )
      }
      {
        step >= 4 && (
          <Result name={name} food={food} drink={drink} />
        )
      }

      {
        step < 4 && (
          <>
            <p>Current step: {step}</p>
            <button type="button" onClick={handleStepIncrease}>Next step</button>
          </>
        )
      }
    </div >

  );
}
