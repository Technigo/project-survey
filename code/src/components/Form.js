import React, { useState } from 'react'

import FirstQuestion from './FirstQuestion'
import PreferenceQuestion from './PreferenceQuestion'
import LastQuestion from './EmailQuestion'
import Summary from './Summary'

const Form = () => {
  const [nameInput, setNameInput] = useState('')
  const [preferenceInput, setPreferenceInput] = useState(false)
  const [emailInput, setEmailInput] = useState('')
  const [step, setStep] = useState(1)

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }

  const onPreferenceInputChange = (event) => {
    setPreferenceInput(event.target.checked)
  }

  const onEmailInputChange = (event) => {
    setEmailInput(event.target.value)
  }

  const onStepChange = () => {
    setStep(step + 1)
  }

  const onEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      setStep(step + 1)
    }
  }

  return (
    <div className="form-container">
      {step === 1 && (
        <FirstQuestion
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onStepChange={onStepChange}
          onEnter={onEnter}
        />
      )}
      {step === 2 && (
        <PreferenceQuestion
          preference={preferenceInput}
          onPreferenceInputChange={onPreferenceInputChange}
          onStepChange={onStepChange}
          onEnter={onEnter}
        />
      )}
      {step === 3 && (
        <LastQuestion
          emailInput={emailInput}
          onEmailInputChange={onEmailInputChange}
          onStepChange={onStepChange}
          onEnter={onEnter}
        />
      )}
      {step === 4 && (
        <Summary
          nameInput={nameInput}
          preferenceInput={preferenceInput}
          emailInput={emailInput}
          onEnter={onEnter}
        />
      )}
    </div>
  )
}

export default Form
