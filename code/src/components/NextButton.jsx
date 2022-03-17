import React from "react"

const NextButton = (props) => {
  const {
    error,
    setError,
    userName,
    likeSports,
    ingredient,
    step,
    onStepChange,
  } = props

  // const regexNamePattern = /^[-a-zA-Z]*$/

  // const regexNamePattern = /^[-a-zA-ZäöåÄÖÅ]+$/
  const regexNamePattern = /^[A-ZÅÄÖ][-a-zåäö]+$/

  const onButtonClickedUserName = (event) => {
    event.preventDefault()
    if (userName.length > 1 && regexNamePattern.test(userName)) {
      setError("")
      onStepChange(1)
    } else {
      setError("Only required field: starts with capital letter, at least two characters, no numbers or special characters")
    }
  }

  // const onButtonClickedUserName = (event) => {
  //   event.preventDefault()
  //   // if (userName.length) {
  //     if (regexNamePattern.test(userName)) {
  //     setError("")
  //     onStepChange(1)
  //   } else {
  //     setError("write a name")
  //   }
  // }

  const onButtonClickedIngredient = (event) => {
    event.preventDefault()
    if ((ingredient.length === 2) | (ingredient.length === 0)) {
      setError("")
      onStepChange(1)
    } else if (ingredient.length === 1) {
      setError("choose one more")
    } else {
      setError("two maximum")
    }
  }

  if (step === 1) {
    return (
      <div className="next-button-box">
        <button type="button" onClick={() => onStepChange(1)}>
          Start
        </button>
      </div>
    )
  } else if (step === 2) {
    return (
      <>
        <div className="next-button-box">
          <button type="button" onClick={onButtonClickedUserName}>
            Next
          </button>
          <div className="error-message">{error}</div>
        </div>
      </>
    )
  } else if (step === 11) {
    return (
      <div className="next-button-box">
        <button type="button" onClick={() => onStepChange(likeSports ? 1 : 2)}>
          Next
        </button>
      </div>
    )
  } else if (step === 13) {
    return (
      <>
        <div className="next-button-box">
          <button type="button" onClick={onButtonClickedIngredient}>
            Next
          </button>
          <div className="error-message">{error}</div>
        </div>
      </>
    )
  } else if (step === 15) {
    return null
  } else {
    return (
      <div className="next-button-box">
        <button type="button" onClick={() => onStepChange(1)}>
          Next
        </button>
      </div>
    )
  }
}

export default NextButton
