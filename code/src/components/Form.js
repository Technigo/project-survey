import React, { useState } from 'react'
import FirstQuestion from './FirstQuestion'
import SecondQuestion from './SecondQuestion'
import ThirdQuestion from './ThirdQuestion'
import FourthQuestion from './FourthQuestion'
import Summary from './Summary'

const Form = () => {
  const [nameInput, setNameInput] = useState('') // state property called nameInput
  const [ageInput, setAgeInput] = useState('age') // state property called surnameInput
  const [activityInput, setActivityInput] = useState('tutoring') // state property called surnameInput
  const [emailInput, setEmailInput] = useState('') // state property called surnameInput
  const [step, setStep] = useState(1)
  const [showResult, setShowResult] = useState(false)

  const onNameInputChange = (event) => { // parent component that delegates the logic to its children, delegates its action to its children.
    setNameInput(event.target.value)
  }

  const onAgeInputChange = (event) => {
    setAgeInput(event.target.value)
  }

  const onActivityInputChange = (event) => {
    setActivityInput(event.target.value)
  }
  
  const onEmailInputChange = (event) => {
    setEmailInput(event.target.value)
  }

  const onStepChange = () => {
    setStep(step + 1)
  }

  return (
    <div>
      {step === 1 && (
        <FirstQuestion   
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onStepChange={onStepChange} 
        />
      )}
      {step === 2 && (
        <SecondQuestion
          age={ageInput}
          onAgeInputChange={onAgeInputChange}
          onStepChange={onStepChange} 
        />
      )}
      {step === 3 && (
        <ThirdQuestion
          activity={activityInput}
          onActivityInputChange={onActivityInputChange}
          onStepChange={onStepChange} 
        />
      )}
      {step === 4 && (
        <FourthQuestion
          email={emailInput}
          onEmailInputChange={onEmailInputChange}
          onStepChange={onStepChange} 
        />
      )}
      {step === 5 && (
        <Summary 
          nameInput={nameInput} 
          ageInput={ageInput}
          activity={activityInput}
          email={emailInput}
        />
      )}
    </div>

  )
}

export default Form
