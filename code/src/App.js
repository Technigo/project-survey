/* eslint-disable */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

import { Logo } from './components/Logo';
import { Role } from './components/Role';
import { Rate } from './components/Rate';
import { Reco } from './components/Reco';
import { Results } from './components/Results';
import { ScrollWin } from './components/ScrollWin';
import { Final } from './components/Final';
 
export const App = () => {
  const [step, setStep] = useState(1)
  const [role, setRole] = useState('')
  const [rate, setRate] = useState('')
  const [reco, setReco] = useState('')
  const [final, setFinal] = useState('')

  const handleStepIncrease = () => {
    setStep(step + 1)
  }
  const handleStepReset = () => {
    setRate('')
    setRole('')
    setReco('')
    setFinal('')
    setStep(1)
  }
  return (
    <div className="main">
      <Logo />
      <div className="topHeader">
        <h1>Welcome to my performance review!</h1>
        <h1>I'd love to know a bit more about how you rate my progress so far.</h1>
      </div>
      <ScrollWin />
      {step === 1 && (
        <Role role={role} setRole={setRole} />
      )}
      {step === 2 && (
        <Rate rate={rate} setRate={setRate} />
      )}
      {step === 3 && (
        <Reco reco={reco} setReco={setReco} />
      )}
      {step === 4 && (
        <Final final={final} setFinal={setFinal} />
      )}
      {step >= 5 && (
        <>
          <Results role={role} rate={rate} reco={reco} final={final} handleStepReset={handleStepReset} />
          <button type="button" onClick={handleStepReset}>
            Reset
          </button>
        </>
      )}
      {step < 5 && (
        <>
          <button type="button" onClick={handleStepIncrease}>Next</button>
        </>
      )}
    </div>
  );
}
