import React, { useState } from 'react';

import { Name } from 'components/Name';
import { Food } from 'components/Food';
import { ZodiacSign } from 'components/ZodiacSign';
import { Result } from 'components/Result';
/* import { RadioButton } from 'components/Radiobutton'; */

export const App = () => {
  /* Is this VARIBLES ? */
  const [step, setStep] = useState(1);
  const [name, setName] = useState();
  const [food, setFood] = useState();
  const [sign, setSign] = useState();

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <>
      {step === 1 && (
        <Name name={name} setName={setName} /> /* alla the name.js codestuff is in NAME */
      )}
      {step === 2 && (
        <ZodiacSign sign={sign} setSign={setSign} />
      )}
      {step === 3 && (
        <Food food={food} setFood={setFood} />
      )}
      {step >= 4 && (
        <Result name={name} food={food} sign={sign} />
      )}

      {step < 4 && (
        <>
          <p>hej {step}</p>
          <button type="button" onClick={handleStepIncrease}>Next step</button>
        </>
      )}
    </>
  );
}
/* current step hanterar nästa steg knappen */
