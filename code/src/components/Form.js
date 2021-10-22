import React, { useState } from 'react'
import FirstQuestion from './FirstQUestion'
import SecondQuestion from './SecondQuestion'
import ThirdQuestion from './ThirdQuestion'
import FourthQuestion from './FourthQuestion'
import Overview from './Overview'

import { beer } from '../beer.js'

const initialState = [
    {
      "name": "Lager",
      "checked": false
    },
    {
      "name": "Ale",
      "checked": false
    },
    {
      "name": "Sour",
      "checked": false
    },
    {
      "name": "Porter",
      "checked": false
    }
  ]

const Form = () => {
  const [nameInput, setNameInput] = useState ('') 
  const [surnameInput, setSurnameInput] = useState('')
  const [flavour, setFlavour] = useState('')
  const [step, setStep] = useState(1)
  const [showResult, setShowResult] = useState(false)
  const [selectedBeers, setSelectedBeers] = useState(initialState)

  const handleOnChange = (beerType) => {
    const updatedSelections = selectedBeers.map((beer) =>
    beer.name === beerType ? { ...beer, checked: !beer.checked } : beer
    )
    setSelectedBeers(updatedSelections)
  }

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }

  const onSurnameInputChange = (event) => {
    setSurnameInput(event.target.value)
  }

  const onFlavourChange = (event) => {
    setFlavour(event.target.value)
  }

  const onStepChange = (motion) => {
    motion === "back" ? (
      setStep(step - 1)
    )
    :
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
            handleOnChange={handleOnChange} 
            onStepChange={onStepChange} 
            selectedBeers={selectedBeers}
            beer={beer}
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
