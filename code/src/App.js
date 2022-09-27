import Intro from './Components/Intro'
import React, { useState } from 'react'
import AgeQuestion from './Components/AgeQuestion';
import FrequencyQuestion from './Components/FrequencyQuestion';
import MuseumQuestion from './Components/MuseumQuestion';
import Result from './Components/Result'
import MemoryQuestion from './Components/MemoryQuestion'
import ThankYou from './Components/ThankYou'

export const App = () => {
  const [step, setStep] = useState(1)

  const [age, setAge] = useState('')
  const [frequency, setFrequency] = useState('')
  const [museum, setMuseum] = useState('')
  const [memory, setMemory] = useState('')


  const handleStepIncrease = () => {
    setStep(step + 1)
  }
  const handleStepDecrease = () => {
    setStep(step - 1)
  }

  return (
    <>
      <div className='outer-container'>
        <div className='inner-container'>
          {step === 1 && (
          <div> 
            <Intro />
            <button className="start-btn" type="button" onClick={handleStepIncrease}>Start survey</button>
          </div>
          )}

          {step === 2 && (
            <AgeQuestion age={age} setAge={setAge} />
          )}

          {step === 3 && (
            <FrequencyQuestion frequency={frequency} setFrequency={setFrequency} />
          )}

          {step === 4 && (
            <MuseumQuestion museum={museum} setMuseum={setMuseum} />
          )}

          {step === 5 && (
            <MemoryQuestion memory={memory} setMemory={setMemory} />
          )}

          {step === 6 && (
            <div>
              <Result age={age} frequency={frequency} museum={museum} memory={memory} />
              <button className="submit-btn" type="button" onClick={handleStepIncrease}>Submit</button>
            </div>
          )}

          {step === 7 && (
            <div>
              <ThankYou />
              <button className="restart-btn" type="button">Restart</button>
            </div>
          )}

          {step < 6 && step > 1 && (
            <div>
              <button className="continue-btn" type="button" onClick={handleStepIncrease}>Continue</button>
            </div>
          )}

          {step >1 && step < 7 && (
            <div>
              <button className="back-btn" type="button" onClick={handleStepDecrease}>Go back</button>
            </div>
          )}

          </div>
        </div>
    </>
  );
}