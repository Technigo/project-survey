import React, { useState } from 'react'
import NameInput from './components/NameInput'
import Temperature from './components/Temperature'
import Dropdown from './components/Dropdown'
import Buttons from './components/Buttons'

export const App = () => {
  const [step, setStep] = useState(1)
  
  const previousStep = () => {
    setStep(step - 1)
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  console.log(step)

  return (
    <>
      {step === 1 && (
        <div>
          <NameInput />
        </div>
      )}

      {step === 2 && (
        <div>
          <Temperature />
        </div>
      )}

      {step === 3 && (
        <div>
          <Dropdown />
        </div>
      )}

      <Buttons nextQ={nextStep} prevQ={previousStep} />
    </>
  )
    
  
}
