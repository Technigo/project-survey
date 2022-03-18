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

  const regexNamePattern = /^[-a-zåäöA-ZÅÄÖ]+$/

  const onButtonClickedUserName = (event) => {
    event.preventDefault()
    if (userName.length > 1 && regexNamePattern.test(userName)) {
      setError("")
      onStepChange(1)
    } else {
      setError("at least 2 letters")
    }
  }

  const onButtonClickedIngredient = (event) => {
    event.preventDefault()
    if ((ingredient.length === 2) | (ingredient.length === 0)) {
      setError("")
      onStepChange(1)
    } else {
      setError("must be 0 or 2 ingredients")
    }
  }

  if (step === 1) {
    return (
      <div className="start-button-box">
        <button
          className="start-button"
          type="button"
          onClick={() => onStepChange(1)}
        >
          Start
        </button>
      </div>
    )
  } else if (step === 2) {
    return (
      <div className="next-button-box">
        <button type="button" onClick={onButtonClickedUserName}>
          Next
        </button>
        <div className="error-message">{error}</div>
      </div>
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
      <div className="next-button-box">
        <button type="button" onClick={onButtonClickedIngredient}>
          Next
        </button>
        <div className="error-message">{error}</div>
      </div>
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
