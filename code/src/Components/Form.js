import React, { useState } from 'react'
import { FirstQuestion } from './FirstQuestion'
import { SecondQuestion } from './SecondQuestion'
import { Overview } from './Overview'

export const Form = () => {
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [surnameInput, setSurnameInput] = useState('')
  const [step, setStep] = useState(1)


  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }
  const onEmailInputChange = (event) =>{
    setEmailInput(event.target.value)
  }
  const onSurnameInputChange = (event) => {
    setSurnameInput(event.target.value)
  }

  const onStepChange  = () => {
      setStep(step + 1)
  }

  return (
      <div>
          {step === 1 && <FirstQuestion 
                            nameInput={nameInput} 
                            onNameInputChange={onNameInputChange} 
                            emailInput={emailInput} 
                            onEmailInputChange={onEmailInputChange} 
                            onStepChange={onStepChange}
                        />}
          {step === 2 && <SecondQuestion 
                            surnameInput={surnameInput} 
                            onSurnameInputChange={onSurnameInputChange} 
                            onStepChange={onStepChange}
                        />}
          {step === 3 && <Overview 
                            nameInput={nameInput} 
                            surnameInput={surnameInput} 
                        />}
      </div>
  )
}




