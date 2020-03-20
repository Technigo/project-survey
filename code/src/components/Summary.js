import React from 'react'
import 'summary.css'

export const Summary = (props) => {

  const { firstName, lastName, email, setProgress } = props

  return (
    <>
      <section>
        <h1>Thank you {firstName}{lastName} we've sent an confirmation to {email}</h1>
      </section>
      {setProgress(100)}
    </>
  )
}