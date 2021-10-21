import React, { useState } from 'react'
import FirstQuestion from './FirstQUestion'
import SecondQuestion from './SecondQuestion'
import ThirdQuestion from './ThirdQuestion'
import FourthQuestion from './FourthQuestion'
import Overview from './Overview'

const Form = () => {
  const [nameInput, setNameInput] = useState ('') 
  const [surnameInput, setSurnameInput] = useState('')
  const [feeling, setFeeling] = useState('')
  const [flavour, setFlavour] = useState('')
  const [step, setStep] = useState(1)
  const [showResult, setShowResult] = useState(false)

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }

  const onSurnameInputChange = (event) => {
    setSurnameInput(event.target.value)
  }

  const onFeelingChange = (event) => {
    setFeeling(event.target.value)
  }

  const onFlavourChange = (event) => {
    setFlavour(event.target.value)
  }

  const onStepChange = () => {
    setStep(step + 1)
  }

  const onFinalQuestion = () => {
    setShowResult(true)
  }

  return (
    showResult ? 
      <Overview 
        nameInput={nameInput} 
        surnameInput = {surnameInput}
        feeling = {feeling}
        flavour = {flavour}
      />
      :
      <section className="form-container">
        {step === 1 && (
          <FirstQuestion 
            nameInput={nameInput} 
            onNameInputChange={onNameInputChange}
            surnameInput={surnameInput} 
            onSurnameInputChange={onSurnameInputChange} 
            onStepChange={onStepChange} 
          />
        )}
        {step === 2 && (
          <SecondQuestion 
            surnameInput={surnameInput} 
            onSurnameInputChange={onSurnameInputChange} 
            onStepChange={onStepChange} 
          />
        )}
        {step === 3 && (
          <ThirdQuestion 
            onFeelingChange={onFeelingChange} 
            onStepChange={onStepChange} 
          />
        )}
        {step === 4 && (
          <FourthQuestion 
            flavour={flavour} 
            onFlavourChange={onFlavourChange} 
            onFinalQuestion={onFinalQuestion} 
          />
        )}
      </section>
  )
}

export default Form
