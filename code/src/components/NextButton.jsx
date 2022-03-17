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
      setError("required field: at least two characters, no numbers/special characters")
    }
  }

  const onButtonClickedIngredient = (event) => {
    event.preventDefault()
    if ((ingredient.length === 2) | (ingredient.length === 0)) {
      setError("")
      onStepChange(1)
    // } else if (ingredient.length === 1) {
    //   setError("choose one more")
    } else {
      setError("choose 0 or 2 ingredients")
    }
  }

  if (step === 1) {
    return (
        <button className="start-button" type="button" onClick={() => onStepChange(1)}>
          Start
        </button>
    )
  } else if (step === 2) {
    return (
      <>
          <button type="button" onClick={onButtonClickedUserName}>
            Next
          </button>
          <div className="error-message">{error}</div>
      </>
    )
  } else if (step === 11) {
    return (
        <button type="button" onClick={() => onStepChange(likeSports ? 1 : 2)}>
          Next
        </button>
    )
  } else if (step === 13) {
    return (
      <>
          <button type="button" onClick={onButtonClickedIngredient}>
            Next
          </button>
          <div className="error-message">{error}</div>
      </>
    )
  } else if (step === 15) {
    return null
  } else {
    return (
        <button type="button" onClick={() => onStepChange(1)}>
          Next
        </button>
    )
  }
}

export default NextButton
