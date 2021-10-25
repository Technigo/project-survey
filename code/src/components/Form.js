import React, { useState } from 'react'
import FirstQuestion from './FirstQuestion'
import SecondQuestion from './SecondQuestion'
import ThirdQuestion from './ThirdQuestion'
import FourthQuestion from './FourthQuestion'
import Summary from './Summary'

const Form = () => {
  const [nameInput, setNameInput] = useState('') // state property called nameInput
  const [activityInput, setActivityInput] = useState('tutoring') // state property
  const [hearAboutInput, setHearAboutInput] = useState('searchengine') // state property
  const [emailInput, setEmailInput] = useState('') // state property
  const [step, setStep] = useState(1)
  // const [showResult, setShowResult] = useState(false)

  const onNameInputChange = (event) => { // parent component that delegates the logic to its children, delegates its action to its children.
    setNameInput(event.target.value)
  }

  const onHearAboutInputChange = (hearabout) => {
    setHearAboutInput(hearabout)
  }

  const onActivityInputChange = (activity) => {
    setActivityInput(activity)
  }
  
  const onEmailInputChange = (event) => {
    setEmailInput(event.target.value)
  }

  const onStepChange = () => {
    setStep(step + 1)
  }

  return (
    <div className='wrapper'>
      {step === 1 && (
        <FirstQuestion   
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onStepChange={onStepChange} 
        />
      )}
      {step === 2 && (
        <SecondQuestion
          activityInput={activityInput}
          onActivityInputChange={onActivityInputChange}
          onStepChange={onStepChange} 
        />
      )}
      {step === 3 && (
        <ThirdQuestion
          hearAbout={hearAboutInput}
          onHearAboutInputChange={onHearAboutInputChange}
          onStepChange={onStepChange} 
        />
      )}
      {step === 4 && (
        <FourthQuestion
          emailInput={emailInput}
          onEmailInputChange={onEmailInputChange}
          onStepChange={onStepChange} 
        />
      )}
      {step === 5 && (
        <Summary 
          nameInput={nameInput} 
          activityInput={activityInput}
          hearAboutInput={hearAboutInput}
          emailInput={emailInput}
        />
      )}
    </div>

  )
}

export default Form
