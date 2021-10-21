import React, { useState } from "react"

import Start from "./Start"
import FirstQuestion from "./FirstQuestion"
import SecondQuestion from "./SecondQuestion"
import ThirdQuestion from "./ThirdQuestion"
import FourthQuestion from "./FourthQuestion"
import Overview from "./Overview"

// Parent component that gives gives orders to the child components

const Form = () => {
  const [nameInput, setNameInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [location, setLocation] = useState("")
  const [priceConditions, setPriceConditions] = useState("")
  const [departure, setDeparture] = useState("")
  const [step, setStep] = useState(1)

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }

  const onEmailInputChange = (event) => {
    setEmailInput(event.target.value)
  }

  const onLocationChange = (event) => {
    setLocation(event.target.value)
  }

  const onPriceConditionsChange = (event) => {
    setPriceConditions(event.target.value)
  }

  const onDepartureChange = (event) => {
    setDeparture(event.target.value)
  }

  const onStepChange = () => {
    setStep(step + 1)
  }

  const onPreStepChange = () => {
    setStep(step - 1)
  }

  return (
    <div>
      {step === 1 && <Start onStepChange={onStepChange} />}

      {step === 2 && (
        <FirstQuestion
          nameInput={nameInput}
          emailInput={emailInput}
          onEmailInputChange={onEmailInputChange}
          onNameInputChange={onNameInputChange}
          onStepChange={onStepChange}
          onPreStepChange={onPreStepChange}
        />
      )}
      {step === 3 && (
        <SecondQuestion
          location={location}
          onLocationChange={onLocationChange}
          onStepChange={onStepChange}
          onPreStepChange={onPreStepChange}
        />
      )}

      {step === 4 && (
        <ThirdQuestion
          priceConditions={priceConditions}
          onPriceConditionsChange={onPriceConditionsChange}
          onStepChange={onStepChange}
          onPreStepChange={onPreStepChange}
        />
      )}

      {step === 5 && (
        <FourthQuestion
          departure={departure}
          onDepartureChange={onDepartureChange}
          onStepChange={onStepChange}
          onPreStepChange={onPreStepChange}
        />
      )}

      {step === 6 && (
        <Overview
          nameInput={nameInput}
          location={location}
          priceConditions={priceConditions}
          departure={departure}
          emailInput={emailInput}
        />
      )}
    </div>
  )
}

export default Form
