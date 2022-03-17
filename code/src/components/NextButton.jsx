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

  const onButtonClickedUserName = (event) => {
    event.preventDefault()
    if (userName.length) {
      setError("")
      onStepChange(1)
    } else {
      setError("write a name")
    }
  }

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
      <>
        <div>{error}</div>
        <button type="button" onClick={onButtonClickedUserName}>
          Next
        </button>
      </>
    )
  } else if (step === 10) {
    return (
      <button type="button" onClick={() => onStepChange(likeSports ? 1 : 2)}>
        Next
      </button>
    )
  } else if (step === 12) {
    return (
      <>
        <div>{error}</div>
        <button type="button" onClick={onButtonClickedIngredient}>
          Next
        </button>
      </>
    )
  } else if (step === 14) {
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
