import React, { useState } from 'react'

import FirstQuestion from './FirstQuestion'
import SecondQuestion from './SecondQuestion'
import LastQuestion from './LastQuestion'
import Summary from './Summary'

const Form = () => {
  const [nameInput, setNameInput] = useState('')
  const [surnameInput, setSurnameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [step, setStep] = useState(1)

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }

  const onSurnameInputChange = (event) => {
    setSurnameInput(event.target.value)
  }

  const onEmailInputChange = (event) => {
    setEmailInput(event.target.value)
  }

  const onStepChange = () => {
    setStep(step + 1)
  }

  return (
    <div className="form-container">
      {step === 1 && (
        <FirstQuestion
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 2 && (
        <SecondQuestion
          surname={surnameInput}
          onSurnameInputChange={onSurnameInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <LastQuestion
          emailInput={emailInput}
          onEmailInputChange={onEmailInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <Summary
          nameInput={nameInput}
          surnameInput={surnameInput}
          emailInput={emailInput}
        />
      )}
    </div>
  )
}

export default Form
