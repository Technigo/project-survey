import React, { useState } from 'react';

import { Starter } from './components/starter/starter'
import { Pasta } from './components/pasta/pasta'
import { Secondo } from './components/secondo/secondo'
import { Dessert } from './components/dessert/dessert'
import { Recap } from './components/recap/recap'

export const App = () => {
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
  // reset all states to their initial values
  const handleRestart = () => {
    setStep(1);
    setStarter('');
    setPasta('');
    setSecondo('');
    setDessert('');
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
      {step === 5 && (
        <Recap
          starter={starter}
          pasta={pasta}
          secondo={secondo}
          dessert={dessert} />
      )}

      {step < 5 && (
        <div>
          <button
            className="step-btn"
            type="button"
            onClick={handleStepIncrease}>
            {step === 1 && 'Create the perfect menu'}
            {step > 1 && step < 5 && 'Next question'}
          </button>
        </div>
      )}
      {step === 5 && (
        <div>
          <button
            className="step-btn"
            type="button"
            onClick={handleRestart}>
            Create a new menu
          </button>
        </div>
      )}
    </div>
  );
}
