import React, { useState } from 'react';
import { Name } from 'Components/NameForm';
import { Points } from 'Components/PointsFile'
import { BestThing } from 'Components/bestThingFile';
import { Impression } from 'Components/Impression'
import { Answer } from 'Components/Answer'
import { Summary } from './Components/Summary';

export const App = () => {
  const [step, setStep] = useState(1);
  const [bestThing, setBestThing] = useState('')
  const [name, setName] = useState('')
  const [points, setPoints] = useState('');
  const [impression, setImpression] = useState('')
  const [answer, setAnswer] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <>
      {step === 1 && (
        <Name name={name} setName={setName} />
      )}
      {step === 2 && (
        <Points points={points} setPoints={setPoints} />
      )}
      {step === 3 && (
        <BestThing bestThing={bestThing} setBestThing={setBestThing} />
      )}
      {step === 4 && (
        <Impression impression={impression} setImpression={setImpression} />
      )}
      {step === 5 && (
        <Answer answer={answer} setAnswer={setAnswer} />
      )}
      {step >= 6 && (
        <Summary
          name={name}
          points={points}
          bestThing={bestThing}
          impression={impression}
          answer={answer} />
      )}

      {step < 6 && (
        <>
          <p>Current step: {step}</p>
          <button type="button" onClick={handleStepIncrease}>Next step</button>
        </>
      )}
    </>
  );
}
