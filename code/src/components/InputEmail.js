import React from 'react'
import './InputEmail.css'

export const InputEmail = ({ id, question, email, setEmail }) => {

  return (
    <label htmlFor="InputEmail">
      <h2>{question}</h2>
      <input
        name="InputEmail"
        type="email"
        // id={id}
        className="input-email-container"
        onChange={(event) => setEmail(event.target.value)}
        value={email}

      //onChange={(event) => setEmail(event.target.value)}
      />
    </label>
  )
}