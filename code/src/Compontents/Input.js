import React from 'react'

export const Input = ({ name, setName }) => {

  return (
    <label>
      <h1>Hello <span aria-label="Hand waves hello" role="img">👋</span></h1>
      <h2>Welcome to Technigo's Survey!</h2>
      <h3>Before we start, what is your name?</h3>
      <input className="text-input"
        type="text"
        onChange={event => setName(event.target.value)}
        value={name}
        required
      />
    </label>
  )
}