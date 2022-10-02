import React, { useState } from 'react';
import Header from 'components/Header'
import DiagnosisQuestion from 'components/DiagnosisQuestion';
import AgeQuestion from 'components/AgeQuestion';
import CoffeeQuestion from 'components/CoffeQuestion';
import SupplementsQuestion from 'components/Supplements';
import UserName from 'components/UserName';
import Summary from 'components/Summary';

export const App = () => {
  const [step, setStep] = useState(1)
  const [diagnosis, setDiagnosis] = useState('')
  const [yearsOfAge, setYearsOfAge] = useState('')
  const [numberOfCoffee, setNumberOfCoffee] = useState('')
  const [supplements, setSupplements] = useState('')
  const [name, setName] = useState('')

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
    <div className="outer-wrapper">
      <div className="background-wrapper">
        <div className="inner-wrapper">
          {step === 1 && (
            <div>
              <Header />
              <button className="start-btn" type="button" onClick={handleStepIncrease}>Start survey</button>
            </div>
          )}

          {step === 2 && (
            <UserName name={name} setName={setName} />
          )}

          {step === 3 && (
            <DiagnosisQuestion diagnosis={diagnosis} setDiagnosis={setDiagnosis} />
          )}

          {step === 4 && (
            <AgeQuestion yearsOfAge={yearsOfAge} setYearsOfAge={setYearsOfAge} />
          )}

          {step === 5 && (
            <CoffeeQuestion numberOfCoffee={numberOfCoffee} setNumberOfCoffee={setNumberOfCoffee} />
          )}

          {step === 6 && (
            <div>
              <SupplementsQuestion supplements={supplements} setSupplements={setSupplements} />
              <button className="submit-btn" type="button" onClick={handleStepIncrease}>Finish survey</button>
            </div>
          )}

          {step === 7 && (
            <>
              <Summary
                name={name}
                diagnosis={diagnosis}
                yearsOfAge={yearsOfAge}
                numberOfCoffee={numberOfCoffee}
                supplements={supplements} />
              <button className="reset-btn" type="button" onClick={handleStepReset}>Have another go!</button>
            </>
          )}

          {step < 7 && step > 1 && (
            <div>
              <button className="continue-btn" type="button" onClick={handleStepIncrease}>Continue</button>
            </div>

          )}

          {step < 7 && step > 1 && (
            <div>
              <button className="back-btn" type="button" onClick={handleStepDecrease}>Go back</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
};
