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

  //   const [error, setError] = useState("")

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
        <button onClick={onButtonClickedUserName}>Next</button>
      </>
    )
  } else if (step === 10) {
    return (
      <button onClick={() => onStepChange(likeSports ? 1 : 2)}>Next</button>
    )
  } else if (step === 12) {
    return (
      <>
        <div>{error}</div>
        <button onClick={onButtonClickedIngredient}>Next</button>
      </>
    )
  } else if (step !== 14) {
    return <button onClick={() => onStepChange(1)}>Next</button>
  }
  else {
      return <div>patatepoil</div>
  }
}

export default NextButton

// ----- why the following isn't working like it was in UserName question??? -----
// return (
//     <div>{!!error.length && <div>{error}</div>}
//     <button onClick={onButtonClicked}>Next</button>
//   )
