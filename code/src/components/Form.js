import React, { useState } from "react"

import Start from "./Start"
import FirstQuestion from "./FirstQuestion"
import SecondQuestion from "./SecondQuestion"
import ThirdQuestion from "./ThirdQuestion"
import Overview from "./Overview"

// Parent component that gives gives orders to the child components

const Form = () => {
  const [nameInput, setNameInput] = useState("")
  const [location, setLocation] = useState("")
  const [timeButton, setTimebutton] = useState("")
  const [step, setStep] = useState(1)

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }

  const onLocationChange = (event) => {
    setLocation(event.target.value)
  }

  const onTimeButtonChange = (event) => {
    setTimebutton(event.target.value)
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
          timeButton={timeButton}
          onTimeButtonChange={onTimeButtonChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 5 && (
        <Overview
          nameInput={nameInput}
          location={location}
          timeButton={timeButton}
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
