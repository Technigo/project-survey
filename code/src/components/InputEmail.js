import React from 'react'
import './InputEmail.css'

export const InputEmail = ({ id, question, email, setEmail }) => {

  return (
    <label htmlFor={id}>
      <h2>{question}</h2>
      <input
        type="email"
        id={id}
        className="input-email-container"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
    </label>
  )
}