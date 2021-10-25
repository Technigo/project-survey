import React, { useState } from 'react'

import FirstQuestion from './FirstQuestion'
import PreferenceQuestion from './PreferenceQuestion'
import EmailQuestion from './EmailQuestion'
import Final from './Final'

const Form = () => {
  const [nameInput, setNameInput] = useState('')
  const [surfInput, setSurfInput] = useState(false)
  const [clothingInput, setClothingInput] = useState(true)
  const [travelInput, setTravelInput] = useState(false)
  const [eventsInput, setEventsInput] = useState(false)

  const [emailInput, setEmailInput] = useState('')
  const [step, setStep] = useState(1)

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }

  const onSurfInputChange = (event) => {
    setSurfInput(event.target.checked)
  }
  const onClothingInputChange = (event) => {
    setClothingInput(event.target.checked)
  }
  const onTravelInputChange = (event) => {
    setTravelInput(event.target.checked)
  }
  const onEventsInputChange = (event) => {
    setEventsInput(event.target.checked)
  }

  const onEmailInputChange = (event) => {
    setEmailInput(event.target.value)
  }

  const onStepChange = () => {
    setStep(step + 1)
  }

  const onEndSurvey = () => {
    window.location.reload()
  }

  const onEnter = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
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
          surf={surfInput}
          onSurfInputChange={onSurfInputChange}
          clothing={clothingInput}
          onClothingInputChange={onClothingInputChange}
          travelInput={travelInput}
          onTravelInputChange={onTravelInputChange}
          eventsinput={eventsInput}
          onEventsInputChange={onEventsInputChange}
          onStepChange={onStepChange}
          onEnter={onEnter}
        />
      )}
      {step === 3 && (
        <EmailQuestion
          emailInput={emailInput}
          onEmailInputChange={onEmailInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <Final
          nameInput={nameInput}
          emailInput={emailInput}
          surfInput={surfInput}
          clothingInput={clothingInput}
          travelInput={travelInput}
          eventsInput={eventsInput}
          onEnter={onEnter}
          onEndSurvey={onEndSurvey}
        />
      )}
    </div>
  )
}

export default Form
