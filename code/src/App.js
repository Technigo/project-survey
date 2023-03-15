/* eslint-disable */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

import { Logo } from './components/Logo';
import { Role } from './components/Role';
import { Rate } from './components/Rate';
import { Reco } from './components/Reco';
import { Results } from './components/Results';
 
export const App = () => {
  const [step, setStep] = useState(1)
  const [role, setRole] = useState('')
  const [rate, setRate] = useState('')
  const [reco, setReco] = useState('')

  const handleStepIncrease = () => {
    setStep(step + 1)
  }
  const handleStepReset = () => {
  }
  return (
    <div className="main">
      <Logo />
      <div className="topHeader">
        <h1>Welcome to my performance review!</h1>
        <h1>I'd love to know a bit more about how you rate my progress so far.</h1>
      </div>
      <div>
        <button className="startBtn" type="button" onClick={handleStepIncrease}>Give Feedback</button>
      </div>
      {step === 1 && (
        <Role role={role} setRole={setRole} />
      )}
      {step === 2 && (
        <Rate rate={rate} setRate={setRate} />
      )}
      {step === 3 && (
        <Reco reco={reco} setReco={setReco} />
      )}
      {step >= 4 && (
        <Results role={role} rate={rate} reco={reco} />
      )}

      {step < 4 && step !== 0 && (
        <>
          <p>Current step: {step}</p>
          <button type="button" onClick={handleStepIncrease}>Next</button>
          <button type="button" onClick={handleStepReset}>
            Reset
          </button>
        </>
      )}
    </div>
  );
}
