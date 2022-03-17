import React from "react"

const ConfirmationPage = (props) => {
  const { userName } = props

  return (
    <div className="q-and-a-box">
      <h1>You want your story, {userName}?</h1>
      <button className="story-button" type="submit">See story</button>
    </div>
  )
}

export default ConfirmationPage
