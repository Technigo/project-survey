import React, { useState } from "react"

import QuestionText from "./QuestionText"
import QuestionRadio from "./QuestionRadio"
import QuestionCheckox from "./QuestionCheckox"
// import QuestionMultipleCheckoxes from "./QuestionMultipleCheckoxes"
import Summary from "./Summary"
import QuestionSelectMenu from './QuestionSelectMenu'

const Form = () => {
  const [name, setName] = useState("")
  const [ageGroup, setAgeGroup] = useState()
  const [wantsNewsletter, setWantsNewsletter] = useState(false)
  // const [fruitLiked, setFruitLiked] = useState(
  //   new Array(fruits.length).fill(false)
  // )
  const [location, setLocation] = useState("")
  const [step, setStep] = useState(1)
  const [showSummary, setShowSummary] = useState(false)

  const onNameChange = (event) => {
    setName(event.target.value)
  }

  const onGroupChange = (event) => {
    setAgeGroup(event.target.value)
  }

  const onNewsletterChange = (event) => {
    setWantsNewsletter(event.target.checked)
  }

  // const onFruitLikedChange = (event) => {
  //   setFruitLiked(event.target.checked)
  // }

  const onLocationChange = (event) => {
    setLocation(event.target.value)
  }

  const onSummary = () => {
    setShowSummary(false)
    setName("")
    setAgeGroup("")
    setWantsNewsletter("")
    setLocation("")
    setStep(1)
  }

  const onStepChange = (motion) => {
    setStep(step + motion)
  }

  const onFinalQuestion = () => {
    setShowSummary(true)
  }

  return showSummary ? (
    <Summary
      name={name}
      ageGroup={ageGroup}
      wantsNewsletter={wantsNewsletter}
      location={location}
      onSummary={onSummary}
    />
  ) : (
    <>
      {step === 1 && (
        <QuestionText
          name={name}
          onNameChange={onNameChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 2 && (
        <QuestionRadio
          ageGroup={ageGroup}
          onGroupChange={onGroupChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <QuestionCheckox
          wantsNewsletter={wantsNewsletter}
          onNewsletterChange={onNewsletterChange}
          onStepChange={onStepChange}
        />
      )}
      {/* {step === 4 && (
        <QuestionMultipleCheckoxes
          fruitLiked={fruitLiked}
          onFruitLikedChange={onFruitLikedChange}
          onFinalQuestion={onFinalQuestion}
        />
      )} */}
            {step === 4 && (
        <QuestionSelectMenu
          location={location}
          onLocationChange={onLocationChange}
          onFinalQuestion={onFinalQuestion}
        />
      )}
    </>
  )
}

export default Form
