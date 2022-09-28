
import React, { useState } from 'react';
import { Result } from 'components/Result';
import { Name } from './components/Name';
import { Food } from './components/Food';
import { Drink } from './components/Drink';
/* const [userInput, setUserInput] = useState(''); */

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [food, setFood] = useState('');
  const [drink, setDrink] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <>
      {step === 1 && (<Name name={name} setName={setName} />
      )}
      {step === 2 && (<Food food={food} setFood={setFood} />
      )}
      {step === 3 && (<Drink drink={drink} setDrink={setDrink} />
      )}
      {step >= 4 && (<Result name={name} food={food} drink={drink} />
      )}

      {step < 4 && (
        <>
          <p>current question: {step}/4</p>
          <button type="button" value={step} onClick={handleStepIncrease}>Next Question</button>
        </>
      )}
    </>
  );
}
