import React, { useState } from 'react';

import { Starter } from './components/starter/starter'
import { Pasta } from './components/pasta/pasta'
import { Secondo } from './components/secondo/secondo'
import { Dessert } from './components/dessert/dessert'

export const App = () => {
  const stepsTotalCount = 4
  // useState before the return function
  const [step, setStep] = useState(1);
  const [starter, setStarter] = useState('')
  const [pasta, setPasta] = useState('')
  const [secondo, setSecondo] = useState('')
  const [dessert, setDessert] = useState('')

  // constant here to follow the steps and create a path for the questions
  const handleStepIncrease = () => {
    setStep(step + 1);
    console.log({ step })
  }

  return (
    <div className="questions-container">
      {step === 1 && (
        <Starter
          starter={starter}
          setStarter={setStarter} />
      )}
      {step === 2 && (
        <Pasta
          pasta={pasta}
          setPasta={setPasta} />
      )}
      {step === 3 && (
        <Secondo
          secondo={secondo}
          setSecondo={setSecondo} />
      )}
      {step === 4 && (
        <Dessert
          dessert={dessert}
          setDessert={setDessert} />
      )}
      {step > 1 && step < 5 && (
        <p className="progress-meter">
          <progress value={step} max={stepsTotalCount + 1}>
            {step} of {stepsTotalCount}
          </progress>
          <span>
            <br />
            <b>{step}</b> / {stepsTotalCount}
          </span>
        </p>
      )}

      {step < 6 && (
        <div className="step-btn">
          <button
            type="button"
            onClick={handleStepIncrease}>
            {step === 1 && 'Create the perfect menu'}
            {step > 1 && step < 6 && 'Next question'}
          </button>
        </div>
      )}
    </div>
  );
}
