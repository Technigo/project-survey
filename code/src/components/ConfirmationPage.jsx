import React from "react"

const ConfirmationPage = (props) => {
  const { userName } = props

  return (
    <div className="q-and-a-box">
      <h1>{userName}, all choices have been made, either by you or randomly: press the button to read the story</h1>
      <button className="story-button" type="submit">Discover the story</button>
    </div>
  )
}

export default ConfirmationPage
