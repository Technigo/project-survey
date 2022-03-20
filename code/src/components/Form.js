import React, { useState } from 'react'

import FirstQuestion from './FirstQuestion'
import SecondQuestion from './SecondQuestion'
import ThirdQuestion from './ThirdQuestion'
import Summery from './Summery'

const Form = () => {
  const [nameInput, setNameInput] = useState('')
  const [item, setDestination] = useState('')
  const [choice, setTime] = useState('')
  const [step, setStep] = useState(1)

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }
  const onSetDestination = (event) => {
    setDestination(event.target.value)
  }
  const onSetTime = (event) => {
    setTime(event.target.vaule)
  }
  const onStepChange = () => {
    setStep(step + 1)
  }
  const onEnter = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      event.preventDefault()
      setStep(step + 1)
    }
  }
  return (
    <section className="main-container">
      {step === 1 && (
        <FirstQuestion
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onStepChange={onStepChange}
          onEnter={onEnter}
        />
      )}
      {step === 2 && (
        <SecondQuestion
          item={item}
          onSetDestination={onSetDestination}
          onStepChange={onStepChange}
          onEnter={onEnter}
        />
      )}
      {step === 3 && (
        <ThirdQuestion
          choice={choice}
          onSetTime={onSetTime}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <Summery
          item={item}
          choice={choice}
          onStepChange={onStepChange}
          onSetTime={onSetTime}
          nameInput={nameInput}
          onEnter={onEnter}
        />
      )}
    </section>
  )
}
export default Form
