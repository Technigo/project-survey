import Intro from './Components/Intro'
import React, { useState } from 'react'
import AgeQuestion from './Components/AgeQuestion';
import FrequencyQuestion from './Components/FrequencyQuestion';
import MuseumQuestion from './Components/MuseumQuestion';
import Result from './Components/Result'

export const App = () => {
  const [step, setStep] = useState(1)

  const [age, setAge] = useState('')
  const [frequency, setFrequency] = useState('')
  const [museum, setMuseum] = useState('')


  const handleStepIncrease = () => {
    setStep(step + 1)
  }

  return (
    <>
      <div className='outer-container'>
        <div className='inner-container'>
          {step === 1 && (
            <Intro />
          )}

          {step === 2 && (
            <AgeQuestion age={age} setAge={setAge} />
          )}

          {step === 3 && (
            <FrequencyQuestion frequency={frequency} setFrequency={setFrequency} />
          )}

          {step === 4 && (
            <MuseumQuestion museum={museum} setDrink={setMuseum} />
          )}

          {step >= 5 && (
            <Result age={age} frequency={frequency} museum={museum} />
          )}

          {step < 5 && (
            <div>
              <button className="continue-btn" type="button" onClick={handleStepIncrease}>Continue</button>
            </div>
          )}
          </div>
        </div>
    </>
  );
}