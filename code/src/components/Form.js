import React, { useState } from "react"

import Header from "./Header"
import Starter from "./Starter"
import FirstQuestion from "./FirstQuestion"
import SecondQuestion from "./SecondQuestion"
import ThirdQuestion from "./ThirdQuestion"
import CheckboxGroup from "./Checkboxgroup"
import ColorInput from "./Colorinput"
import Summary from "./Summary"
import Alien from "./Alien"
import Footer from "./Footer"

const Form = () => {
  // ----- STATES -----

  const [nameInput, setNameInput] = useState("")
  const [locationInput, setLocationInput] = useState()
  const [timeInput, setTimeInput] = useState([])
  const [step, setStep] = useState(0)
  const [checkboxGroup, setCheckboxGroup] = useState([])
  const [colorInput, setColorInput] = useState()

  // ----- FUNCTIONS -----

  // This function stores the answer from the first question (text input)
  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }
  // This function stores the answer from the second question (radio input)
  const onTimeInputChange = (event) => {
    setTimeInput(event.target.value)
  }

  // This function stores the answer from the third question (select input)
  const onLocationInputChange = (event) => {
    setLocationInput(event.target.value)
  }

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

  const handleColorInputChange = (event) => {
    setColorInput(event.target.value)
  }

  // This function leads to the next question
  const onNextQuestionChange = () => {
    setStep(step + 1)
  }

  // This function goes back to the previous question
  const onPreviousQuestionChange = () => {
    setStep(step - 1)
  }

  // ----- RENDERING -----

  return (
    <>
      <Header />
      <main className="main-contaniner">
        {step === 0 && <Starter onNextQuestionChange={onNextQuestionChange} />}

        {/* FirstQuestion */}
        {step === 1 && (
          <FirstQuestion
            nameInput={nameInput}
            onNameInputChange={onNameInputChange}
            onNextQuestionChange={onNextQuestionChange}
            onPreviousQuestionChange={onPreviousQuestionChange}
          />
        )}

        {/* SecondQuestion */}
        {step === 2 && (
          <SecondQuestion
            timeInput={timeInput}
            onTimeInputChange={onTimeInputChange}
            onNextQuestionChange={onNextQuestionChange}
            onPreviousQuestionChange={onPreviousQuestionChange}
          />
        )}

        {/* ThirdQuestion */}
        {step === 3 && (
          <ThirdQuestion
            locationInput={locationInput}
            onLocationInputChange={onLocationInputChange}
            onNextQuestionChange={onNextQuestionChange}
            onPreviousQuestionChange={onPreviousQuestionChange}
          />
        )}

        {/* FourthQuestion */}
        {step === 4 && (
          <section className="question-container">
            <CheckboxGroup
              checkboxGroup={checkboxGroup}
              onChangeFunction={onCheckboxGroupToggle}
              onNextQuestionChange={onNextQuestionChange}
              onPreviousQuestionChange={onPreviousQuestionChange}
            />
          </section>
        )}
        {step === 5 && (
          <section className="question-container">
            <ColorInput
              colorInput={colorInput}
              handleColorInputChange={handleColorInputChange}
              onNextQuestionChange={onNextQuestionChange}
              onPreviousQuestionChange={onPreviousQuestionChange}
            />
          </section>
        )}

        {/* Output Ptime*/}
        {step === 6 && (
          <Summary
            nameInput={nameInput}
            locationInput={locationInput}
            timeInput={timeInput}
            checkboxGroup={checkboxGroup}
            colorInput={colorInput}
            onNextQuestionChange={onNextQuestionChange}
          />
        )}
        {step === 7 && <Alien />}
      </main>
      <Footer />
    </>
  )
}

export default Form
