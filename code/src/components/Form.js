import React, { useState } from "react"

import FirstQuestion from "./FirstQuestion"
import SecondQuestion from "./SecondQuestion"
import ThirdQuestion from "./ThirdQuestion"

const Form = () => {
  const [nameInput, setNameInput] = useState("")
  const [surnameInput, setSurnameInput] = useState("")
  const [step, setStep] = useState(1)

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }
  const onSurnameInputChange = (event) => {
    setSurnameInput(event.target.value)
  }

  const onStepChange = () => {
    setStep(step + 1)
  }

  if (step === 1) {
    return (
      <FirstQuestion
        nameInput={nameInput}
        onNameInputChange={onNameInputChange}
        onStepChange={onStepChange}
      />
    )
  } else if (step === 2) {
    return (
      <SecondQuestion
        surnameInput={surnameInput}
        onSurnameInputChange={onSurnameInputChange}
        onStepChange={onStepChange}
      />
    )
  } else if (step === 3) {
    return <ThirdQuestion nameInput={nameInput} surnameInput={surnameInput} />
  }
}

export default Form
