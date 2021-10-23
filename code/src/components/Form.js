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
  const [emailInput, setEmailInput] = useState('')
  const [addressInput, setAddressInput] = useState('')
  const [brewery, setBrewery] = useState('')
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

  const onEmailInputChange = (event) => {
    setEmailInput(event.target.value)
  }

  const onAddressInputChange = (event) => {
    setAddressInput(event.target.value)
  }

  const onBreweryChange = (event) => {
    setBrewery(event.target.value)
  }

  const onStepChange = (motion) => {
    motion === "back" ? (
      setStep(step - 1)
    )
    :
    setStep(step + 1)
  }

  const onOverview = () => {
    setStep(1)
  }

  const onFinalQuestion = () => {
    setShowResult(true)
  }

  return (
    showResult ? 
      <Overview 
        nameInput={nameInput} 
        emailInput = {emailInput}
        addressInput={addressInput}
        brewery = {brewery}
        selectedBeers = {selectedBeers}
        onOverview = {onOverview}
      />
      :
      <section className="form-container">
        {step === 1 && (
          <FirstQuestion 
            nameInput={nameInput} 
            onNameInputChange={onNameInputChange}
            emailInput={emailInput} 
            onEmailInputChange={onEmailInputChange} 
            onStepChange={onStepChange} 
          />
        )}
        {step === 2 && (
          <SecondQuestion 
            addressInput={addressInput} 
            onAddressInputChange={onAddressInputChange} 
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
            brewery={brewery} 
            onBreweryChange={onBreweryChange}
            onStepChange={onStepChange}  
            onFinalQuestion={onFinalQuestion} 
          />
        )}
      </section>
  )
}

export default Form
