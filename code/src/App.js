import React, { useState } from 'react';
import { Name } from 'components/nameForm';
import { Points } from 'components/pointsFile'
import { BestThing } from 'components/bestThingFile';
import { Impression } from 'components/impression'
import { Answer } from 'components/answer'
import { Summary } from './components/summary';

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

  const handleStepDecrease = () => {
    setStep(step - 1);
  }

  return (
    <>
      {step === 1 && (
        <div className={`step-${step}`}>
          <Name name={name} setName={setName} />
        </div>
      )}
      {step === 2 && (
        <div className={`step-${step}`}>
          <Points points={points} setPoints={setPoints} />
        </div>
      )}
      {step === 3 && (
        <div className={`step-${step}`}>
          <BestThing bestThing={bestThing} setBestThing={setBestThing} />
        </div>
      )}
      {step === 4 && (
        <div className={`step-${step}`}>
          <Impression impression={impression} setImpression={setImpression} />
        </div>
      )}
      {step === 5 && (
        <div className={`step-${step}`}>
          <Answer answer={answer} setAnswer={setAnswer} />
        </div>
      )}
      {step >= 6 && (
        <Summary
          name={name}
          points={points}
          bestThing={bestThing}
          impression={impression}
          answer={answer} />
      )}

      <div className="buttons">
        {step > 1 && step <= 5 && (
          <button type="button" onClick={handleStepDecrease}>
            Previous
          </button>
        )}
        {step < 6 && (
          <button type="button" onClick={handleStepIncrease}>
            Next
          </button>
        )}
      </div>
    </>
  )
}