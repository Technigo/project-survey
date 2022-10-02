import Intro from './Components/Intro'
import React, { useState } from 'react'
import AgeQuestion from './Components/AgeQuestion';
import FrequencyQuestion from './Components/FrequencyQuestion';
import MuseumQuestion from './Components/MuseumQuestion';
import Result from './Components/Result'
import TextAreaInput from './Components/TextAreaInput'
import ProgressBar from './Components/ProgressBar'
import Footer from 'Components/Footer'

export const App = () => {
  const [step, setStep] = useState(1)

  const [age, setAge] = useState('')
  const [frequency, setFrequency] = useState('')
  const [museum, setMuseum] = useState('')
  const [memory, setMemory] = useState('')
  const [improvements, setImprovements] = useState('')


  const handleStepIncrease = () => {
    setStep(step + 1)
  }
  const handleStepDecrease = () => {
    setStep(step - 1)
  }
  const handleStepReset = () => {
    setStep(1)
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
            <div>
            <TextAreaInput 
              headline="A memorable visit?"
              input={memory}
              setInput={setMemory}
              inputLabel="We are interested in hearing if you have a special memory from a visit at one of Stockholm's
              museums that you wish to share. Perhaps you remember a certain exhibit fondly, or have a mildly traumatic
              experiece related to a boring visit?"
              id="memorable-visit"
              placeholder="A memorable visit..."
              htmlFor="memorable-visit"
              />
              
            </div>
          )}

          {step === 6 && (
            <div>
            <TextAreaInput 
              headline="Room for improvements!"
              input={improvements} 
              setInput={setImprovements} 
              inputLabel="Lastly, we would highly appriciate if you would want to share your thoughts on what
              could be improved when it comes to the museums of Stockholm"
              id="improvements"
              placeholder="My thoughts on measures that could be taken to improve Stockholm's museums..."
              htmlFor="improvements"
              />
            <button className="submit-btn" type="button" onClick={handleStepIncrease}>Finish survey</button>
            </div>
          )} 

          {step === 7 && (
            <div>
              <Result age={age} frequency={frequency} museum={museum} memory={memory} improvements={improvements}/>
            </div>
          )}

          {step >= 2 && step < 7 && (
            <div>
              <ProgressBar 
                step={step}
                setStep={setStep}/>
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

          {step >=7 && (
            <div>
              <button className="reset-btn" type="button" onClick={handleStepReset}>Restart survey</button>
            </div>
          )}
        </div>
      </div>
      <Footer />  
    </>
  );
}