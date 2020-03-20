import React from 'react'

export const Summary = (props) => {

  const { firstName, lastName, email, setProgress, attendingOption, option } = props

  return (
    <>

      <h1>Thank you for your registration!</h1>
      <p>We're so happy to spend some time with you, {firstName} {lastName}. We've sent an confirmation to your {email}. Be prepared for {attendingOption} and we wish you will have fun with the {option}.</p>

      {setProgress(100)}
    </>
  )
}