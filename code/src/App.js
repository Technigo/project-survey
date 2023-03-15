import React, { useState } from 'react';

import { Name } from 'components/Name';
import { Food } from 'components/Food';
import { Drink } from 'components/Drink';
import { Result } from 'components/Result';

/* mothership (parent) COMPONENT ? */
export const App = () => {
  /* Is this VARIBLES ? */
  const [step, setStep] = useState(1);
  const [name, setName] = useState(2);
  const [food, setFood] = useState(3);
  const [drink, setDrink] = useState(4);
  /*  FUNCTION */
  const handleStepIncrease = () => {
    /* Is this also a varible? */
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
      {step >= 4 && (
        <Result name={name} food={food} drink={drink} />
      )}

      {step < 4 && (
        <>
          <p>Current step: {step}</p>
          <button type="button" onClick={handleStepIncrease}>Next step</button>
        </>
      )}
    </>
  );
}

