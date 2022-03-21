import React, { useState } from 'react'

import FirstQuestion from './FirstQuestion'
import SecondQuestion from './SecondQuestion'
import ThirdQuestion from './ThirdQuestion'
import Summery from './Summery'

const Form = () => {
  const [nameInput, setNameInput] = useState('')
  const [destination, setDestination] = useState('')
  const [options, setTravel] = useState('')
  const [step, setStep] = useState(1)

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }
  const onSetDestination = (event) => {
    setDestination(event.target.value)
  }
  const onSetTravel = (event) => {
    setTravel(event.target.vaule)
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
          destination={destination}
          onSetDestination={onSetDestination}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <ThirdQuestion
          options={options}
          onSetTravel={onSetTravel}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <Summery
          nameInput={nameInput}
          destination={destination}
          options={options}
          onStepChange={onStepChange}
        />
      )}
    </section>
  )
}
export default Form
