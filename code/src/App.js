import React, { useState } from 'react';
import Intro from './components/Intro'
import QuestionOne from './components/QuestionOne';
import QuestionTwo from './components/QuestionTwo';
import QuestionFour from './components/QuestionFour';
import QuestionThree from './components/QuestionThree';


export const App = () => {
  const [step, setStep] = useState(1);
  
  const [name, setName] = useState ('')
  const [activity, setActivity] = useState  ('')
  const [size, setSize] = useState ('')
  const [famous, setFamous] = useState ('')

  const handleStepIncrease = () => {
    setStep(step + 1);
  }
  const handleStepDecrease = () => {
    setStep(step - 1)
  }

  
  return (
  <>
    <div classname='outer-container'>
        <div className='inner-container'>
          {step === 1 && (
            <div> 
            <Intro />
            <button className="start-btn" type="button" onClick={handleStepIncrease}>Start survey</button>
          </div>
          )}

          {step === 2 && (
            <QuestionOne name={name} setName ={setName} />
          )}

          {step === 3 && (
            <QuestionTwo activity={activity} setActivity ={setActivity} />
          )}

          {step === 4 && (
            <QuestionThree size={size} setSize={setSize} />
          )}

          {step === 5 && (
            <QuestionFour famous={famous} setFamous={setFamous} />
          )}

         {step < 6 && step > 1 && (
            <div>
              <button className="continue-button" type="button" onClick={handleStepIncrease}>Continue</button>
            </div>
          )}

          {step > 1 && (
            <div>
            <button className="back-button" type="button" onClick={handleStepDecrease}>Go back</button>
          </div>
          )}

        </div>
  </div>
  </>
);
}
