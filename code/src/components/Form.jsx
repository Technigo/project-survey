import React, { useState } from "react"

import QuestionText from "./QuestionText"
import QuestionRadio from "./QuestionRadio"
import QuestionCheckox from "./QuestionCheckox"
// import QuestionMultipleCheckoxes from "./QuestionMultipleCheckoxes"
import QuestionRangeSlider from "./QuestionRangeSlider"
import QuestionSelectMenu from './QuestionSelectMenu'
import Summary from "./Summary"

const Form = () => {
  const [name, setName] = useState("")
  const [ageGroup, setAgeGroup] = useState()
  const [wantsNewsletter, setWantsNewsletter] = useState(false)
  // const [multiple, setMultiple] = useState(false)
  const [location, setLocation] = useState("")
  const [like, setLike] = useState("")
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

  // const onMultipleChange = (event) => {
  //   setMultiple(event.target.checked)
  // }

  const onLikeChange = (event) => {
    setLike(event.target.value)
  }

  const onLocationChange = (event) => {
    setLocation(event.target.value)
  }

  const onSummary = () => {
    setShowSummary(false)
    setName("")
    setAgeGroup("")
    setWantsNewsletter("")
    // setMultiple("")
    setLike("")
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
      // multiple={multiple}
      like={like}
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
          multiple={multiple}
          onMultipleChange={onMultipleChange}
          onStepChange={onStepChange}
        />
      )} */}
            {step === 4 && (
        <QuestionRangeSlider
          like={like}
          onLikeChange={onLikeChange}
          onStepChange={onStepChange}
        />
      )}
            {step === 5 && (
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
