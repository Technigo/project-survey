import React, { useState } from "react"

const NextButton = (props) => {
  const {
    userName,
    likeSports,
    step,
    onStepChange,
  } = props

  const [error, setError] = useState("")

  const onButtonClicked = (event) => {
    event.preventDefault()
    if (userName.length) {
      onStepChange(1)
    } else {
      setError("required input")
    }
  }

  if (step === 1) {
    console.log(error)
    return (
      <>
        <div>{error}</div>
        <button onClick={onButtonClicked}>Next</button>
      </>
    )
  } else if (step === 10) {
    return (
      <button onClick={() => onStepChange(likeSports ? 1 : 2)}>Next</button>
    )
  } else {
    return <button onClick={() => onStepChange(1)}>Next</button>
  }
}
export default NextButton

// ----- why the following isn't working like it was in UserName question??? -----
// return (
//     <div>{!!error.length && <div>{error}</div>}
//     <button onClick={onButtonClicked}>Next</button>
//   )
