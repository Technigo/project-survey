import React from "react"

export const Textinput = props => {

  const { firstName, setFirstName, lastName, setLastName, email, setEmail, setProgress } = props

  return (
    <>
      <div className="input">
        <h2>Your contact details</h2>
        <label>First name:</label>
        <input
          type="text"
          onChange={event => setFirstName(event.target.value)}
          value={firstName}
          required
        ></input>
        <label>Last name:</label>
        <input
          type="text"
          onChange={event => setLastName(event.target.value)}
          value={lastName}
          required
        ></input>
        <label>Email:</label>
        <input
          type="email"
          onChange={event => setEmail(event.target.value)}
          value={email}
          required
        ></input>
      </div>
      {setProgress(25)}
    </>
  )
}