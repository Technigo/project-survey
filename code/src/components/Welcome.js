import React from "react"

export const Welcome = (props) => {

  const { setProgress } = props

  return (
    <>
      <h1>Register for this event</h1>
      <p>Please fill in the form and click the submitt button below to complete your registration for this event. You will recieve an confirmation upon successful registration. Not that starred files are requiered.</p>
      {setProgress(0)}
    </>
  )
}