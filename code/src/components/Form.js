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
  const [nights, setNights] = useState("")
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

  const onNightsChange = (event) => {
    setNights(event.target.value)
  }

  const onStepChange = () => {
    setStep(step + 1)
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
        />
      )}
      {step === 3 && (
        <SecondQuestion
          location={location}
          onLocationChange={onLocationChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 4 && (
        <ThirdQuestion
          priceConditions={priceConditions}
          onPriceConditionsChange={onPriceConditionsChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 5 && (
        <FourthQuestion
          nights={nights}
          onNightsChange={onNightsChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 6 && (
        <Overview
          nameInput={nameInput}
          location={location}
          priceConditions={priceConditions}
          nights={nights}
          emailInput={emailInput}
        />
      )}
    </div>
  )
}

// return (
//   <div>
//     <form>
//       <label htmlFor="nameInput">Type your name</label>
//       <input
//         id="nameInput"
//         type="text"
//         value={nameInput}
//         onChange={onNameInputChange}
//       />

//       <label htmlFor="surnameInput">Type your surname</label>
//       <input
//         id="surnameInput"
//         type="text"
//         value={surnameInput}
//         onChange={onSurnameInputChange}
//       />
//     </form>

//     <section>
//       <h2>My values from the form: </h2>
//       <p>Name : {nameInput}</p>
//       <p>Surname : {surnameInput}</p>
//     </section>
//   </div>
// )

export default Form
