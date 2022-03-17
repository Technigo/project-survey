import React from "react"

const ConfirmationPage = (props) => {
  const { userName } = props

  return (
    <>
      <h1>You want your story, {userName}?</h1>
      <button type="submit">See story</button>
    </>
  )
}

export default ConfirmationPage
