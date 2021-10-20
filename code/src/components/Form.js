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
    setFeeling(feeling)
  }

  const onFlavourChange = (event) => {
    setFlavour(flavour)
  }

  const onStepChange = () => {
    setStep(step + 1)
  }

  const onFinalQuestion = () => {
    setShowResult(true)
  }

  return (
    showResult ? <Overview nameInput={nameInput} surnameInput = {surnameInput}/>:
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
            surnameInput={surnameInput} 
            onSurnameInputChange={onSurnameInputChange} 
            onStepChange={onStepChange} 
          />
        )}
        {step === 3 && (
          <ThirdQuestion 
            feeling={feeling} 
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
      </div>
      )
  // if(step===1) {
  //   return <FirstQuestion 
  //     nameInput={nameInput} 
  //     onNameInputChange={onNameInputChange}
  //     onStepChange={onStepChange} />
  // } else if (step===2) {
  //   return <SecondQuestion 
  //     surnameInput={surnameInput} 
  //     onSurnameInputChange={onSurnameInputChange} 
  //     onStepChange={onStepChange} />
  // } else if (step===3) {
  //   return <Overview 
  //   nameInput={nameInput}
  //   surnameInput = {surnameInput}/>
  // }
}

export default Form
