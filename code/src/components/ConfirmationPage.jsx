import React from "react"

const ConfirmationPage = (props) => {
  const { userName, onStepChange } = props

  return (
    <>
      <h1>You want your story, {userName}?</h1>
      <button type="submit">See story</button>
      <button onClick={() => onStepChange(-1)}>Go back</button>
    </>
  )
}

export default ConfirmationPage
