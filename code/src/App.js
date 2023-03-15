import React, { useState } from 'react';

import { Name } from 'components/Name';
import { Food } from 'components/Food';
import { Drink } from 'components/Drink';
import { Result } from 'components/Result';
import { RadioButton } from 'components/Radiobutton';

/* mothership (parent) COMPONENT ? */
export const App = () => {
  /* Is this VARIBLES ? */
  const [step, setStep] = useState(1);
  const [name, setName] = useState();
  const [food, setFood] = useState();
  const [drink, setDrink] = useState();
  /*  FUNCTION */
  const handleStepIncrease = () => {
    /* Is this also a varible? */
    setStep(step + 1);
  }

  return (
    <>
      {step === 1 && (
        <Name name={name} setName={setName} /> /* alla the name.js codestuff is in NAME */
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

