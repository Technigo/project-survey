import React, { useState } from 'react';
import { Name } from './components/Name'
import { Frequently } from './components/Frequently'
import { Brand } from './components/Brand'
import { Spend } from './components/Spend'
import { Secondhand } from './components/Secondhand'
import { Summary } from './components/Summary'
import { ThankYouPage } from './components/ThankYouPage';

export const App = () => {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [frequently, setFrequently] = useState('')
  const [brand, setBrand] = useState('')
  const [spend, setSpend] = useState('')
  const [secondHand, setSecondHand] = useState('')

  const handleStepIncrease = () => {
    setStep(step + 1)
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
        <>
          <p className="current-question">Current question: {step}/5</p>
          <button className="next-button" type="button" onClick={handleStepIncrease}>Next Question</button>
        </>
      )}
    </div>
  );
}
