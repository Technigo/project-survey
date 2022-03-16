import React from "react"

const ConfirmationPage = (props) => {
  const { userName, onStepChange, onFinalQuestion } = props

  return (
    <>
      <h1>You want your story, {userName}?</h1>
      <button onClick={onFinalQuestion}>See story</button>
      <button onClick={() => onStepChange(-1)}>Go back</button>
    </>
  )
}

export default ConfirmationPage
