import React, { useState } from 'react';

import { Name } from 'components/Name';
import { ZodiacSign } from 'components/ZodiacSign';
import { Result } from 'components/Result';
import { Selector } from 'components/Selector'

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState();
  const [sign, setSign] = useState();
  const [select, setSelect] = useState();

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <>
      {/* Whats your name? */}
      {step === 1 && (
        <Name name={name} setName={setName} /> /* alla the name.js codestuff is in NAME */
      )}
      {/* Choose your Zodiac sign */}
      {step === 2 && (
        <ZodiacSign sign={sign} setSign={setSign} />
      )}
      {/* How much *sign* are you? */}
      {step === 3 && (
        <Selector sign={sign} setSign={setSign} select={select} setSelect={setSelect} />
      )}
      {/* Your name is, you are  */}
      {step >= 4 && (
        <Result name={name} hej={1} select={select} sign={sign} />
      )}
      {step < 4 && (
        <div className="button">
          <p>{step}</p>
          <button type="button" onClick={handleStepIncrease}>Let´s go</button>
        </div>
      )}
    </>
  );
}
/* current step hanterar nästa steg knappen */
