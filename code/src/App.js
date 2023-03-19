import React, { useState } from 'react';
import { Name } from './components/Name'
import { Frequently } from './components/Frequently'
import { Brand } from './components/Brand'
import { Spend } from './components/Spend'
import { Secondhand } from './components/Secondhand'
import { Summary } from './components/Summary'
import { ThankYouPage } from './components/ThankYouPage';
import { ProgressBar } from './components/ProgressBar'

export const App = () => {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [frequently, setFrequently] = useState('')
  const [brand, setBrand] = useState('')
  const [spend, setSpend] = useState('')
  const [secondHand, setSecondHand] = useState('')

  const handleStepIncrease = () => {
    if (step === 1 && name === '') {
      alert('Please enter your name beforing proceeding to next question');
    } else if (step === 2 && frequently === '') {
      alert('Please choose one option before proceeding to next question');
    } else if (step === 3 && brand === '') {
      alert('Please pick one of the brands before proceeding to next question');
    } else if (step === 4 && spend === '') {
      alert('Please use the slider to pick an amount beforing proceeding to next question');
    } else {
      setStep(step + 1);
    }
  }

  return (
    <div className="app">
      {step === 1 && (<Name name={name} setName={setName} step={step} setStep={setStep} />
      )}
      {step === 2 && (<Frequently frequently={frequently} setFrequently={setFrequently} />
      )}
      {step === 3 && (<Brand brand={brand} setBrand={setBrand} />
      )}
      {step === 4 && (<Spend spend={spend} setSpend={setSpend} />
      )}
      {step === 5 && (
        <>
          <Secondhand
            secondHand={secondHand}
            setSecondHand={setSecondHand}
            step={step}
            setStep={setStep} />
          <p>Current question:{step}/5</p>
          <button type="button" onClick={handleStepIncrease}>See Summary!</button>
        </>
      )}
      {step === 6 && (
        <>
          <Summary
            step={step}
            setStep={setStep}
            name={name}
            frequently={frequently}
            brand={brand}
            spend={spend}
            secondHand={secondHand} />
          <button type="button" onClick={handleStepIncrease}>Submit</button>
        </>
      )}
      {step === 7 && (
        <ThankYouPage />
      )}
      {step < 5 && (
        <button className="next-button" type="button" onClick={handleStepIncrease}>Next &gt;&gt;</button>
      )}
      {step < 7 && (
        <ProgressBar currentStep={step} totalSteps={6} />
      )}
    </div>
  );
}
