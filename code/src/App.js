import React, { useState } from 'react';

import { Name } from 'components/Name';
/* import { Kitty } from 'components/Kitty'; */
import { ZodiacSign } from 'components/ZodiacSign';
import { Result } from 'components/Result';
import { Selector } from 'components/Selector'
/* import { RadioButton } from 'components/Radiobutton'; */

export const App = () => {
  /* Is this VARIBLES ? */
  const [step, setStep] = useState(1);
  const [name, setName] = useState();
  const [sign, setSign] = useState();
  /* const [signmeeter, setSignmeeter] = useState(5); */
  const [select, setSelect] = useState();

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
      {/* {step === 3 && (
        <Kitty milk={sign} signmeeter={signmeeter} setSignmeeter={setSignmeeter} />
      )} */}
      {step === 3 && (
        <Selector milk={sign} select={select} setSelect={setSelect} />
      )}
      {step >= 4 && (
        <Result name={name} hej={1} sign={sign} />
      )}
      {step < 5 && (
        <div className="button">
          <p>{step}</p>
          <button type="button" onClick={handleStepIncrease}>Let´s go</button>
        </div>
      )}
    </>
  );
}
/* current step hanterar nästa steg knappen */
