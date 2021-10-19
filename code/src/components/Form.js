import React, { useState } from "react"

import Starter from "./Starter"
import FirstQuestion from "./FirstQuestion"
import SecondQuestion from "./SecondQuestion"
import ThirdQuestion from "./ThirdQuestion"
import FourthQuestion from "./FourthQuestion"

import Summary from "./Summary"
import Footer from "./Footer"

const Form = () => {
  const [nameInput, setNameInput] = useState("")
  const [locationInput, setLocationInput] = useState()
  const [ageInput, setAgeInput] = useState([])
  // const [character, setcharacter] = useState([])
  const [step, setStep] = useState(0)

  const [checkboxGroup, setCheckboxGroup] = useState([])

  // This function will update the value of an array/answer for the fifth question (checkbox group input)
  const onCheckboxGroupToggle = (checkboxValue) => {
    if (checkboxGroup.includes(checkboxValue)) {
      // delete element from array by using filter method
      setCheckboxGroup(checkboxGroup.filter((item) => item !== checkboxValue))
    } else {
      // add element to array. Spread operator (...) will copy all the values from the previous heckboxGroup array
      setCheckboxGroup([checkboxValue, ...checkboxGroup])
    }
  }

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }
  const onLocationInputChange = (event) => {
    setLocationInput(event.target.value)
  }

  const onAgeInputChange = (event) => {
    setAgeInput(event.target.value)
  }

  const onStepChange = () => {
    setStep(step + 1)
  }

  // This function leads to the next question
  const onNextQuestionChange = () => {
    setStep(step + 1)
  }

  // This function goes back to the previous question
  const onPreviousQuestionChange = () => {
    setStep(step - 1)
  }

  return (
    <main className="main-contaniner">
      {step === 0 && <Starter onStepChange={onStepChange} />}
      {step === 1 && (
        <FirstQuestion
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          // onStepChange={onStepChange}
          onNextQuestionChange={onNextQuestionChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
        />
      )}

      {step === 2 && (
        <SecondQuestion
          ageInput={ageInput}
          onAgeInputChange={onAgeInputChange}
          onNextQuestionChange={onNextQuestionChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
        />
      )}
      {step === 3 && (
        <ThirdQuestion
          locationInput={locationInput}
          onLocationInputChange={onLocationInputChange}
          onNextQuestionChange={onNextQuestionChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
        />
      )}
      {step === 4 && (
        <section className="question-container">
          {/* {checkboxGroupArray.map((character) => ( */}
          <FourthQuestion
            // character={character}
            onChangeFunction={onCheckboxGroupToggle}
            checkboxGroup={checkboxGroup}
            onNextQuestionChange={onNextQuestionChange}
            onPreviousQuestionChange={onPreviousQuestionChange}
          />
          {/* ))} */}
        </section>
      )}
      {step === 5 && (
        <Summary
          nameInput={nameInput}
          locationInput={locationInput}
          ageInput={ageInput}
          checkboxGroup={checkboxGroup}
        />
      )}

      <Footer />
    </main>
  )
}

export default Form
