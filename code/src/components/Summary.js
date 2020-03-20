import React from 'react'
import 'summary.css'

export const Summary = (props) => {

  const { firstName, lastName, email, setProgress, attendingOption, option } = props

  return (
    <>
      <section>
        <h1>Thank you {firstName}{lastName} we've sent an confirmation to {email}</h1>
        <p>So according to your answers you will {attendingOption} and have {option}</p>
      </section>
      {setProgress(100)}
    </>
  )
}