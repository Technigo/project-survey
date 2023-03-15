import React, { useState } from 'react';
import { FirstQuestion } from 'Components/FirstQuestion';
import { SecondQuestion } from 'Components/SecondQuestion';
import { ThirdQuestion } from 'Components/ThirdQuestion';
import { Result } from 'Components/Result';

export const App = () => {
  const [step, setStep] = useState(1);
  const [adjective, setadjective] = useState('');
  const [foodNoun, setfoodNoun] = useState('');
  const [ingVerb, setingVerb] = useState('');

  const handleProgress = () => {
    setStep(step + 1);
  }
  return (
    <>
      {step === 1 && (
        <FirstQuestion adjective={adjective} setadjective={setadjective} />
      )}
      {step === 2 && (
        <SecondQuestion foodNoun={foodNoun} setfoodNoun={setfoodNoun} />
      )}
      {step === 3 && (
        <ThirdQuestion ingVerb={ingVerb} setingVerb={setingVerb} />
      )}
      {step === 4 && (
        <Result
          adjective={adjective}
          foodNoun={foodNoun}
          ingVerb={ingVerb} />
      )}
      {step < 4 && (
        <>
          <p className="counterText"> Questions answered: {step}/9 </p>
          <button className="button" type="button" onClick={handleProgress}>Next question</button>
        </>
      )}
    </>
  )
}