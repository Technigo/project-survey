import React, { useState } from "react"

export const Textinput = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  return (
    <>
      <h2>Your contact details</h2>
      <label htmlFor="firstName">First name:</label>
      <input
        type="text"
        id="firstName"
        onChange={event => setFirstName(event.target.value)}
        value={firstName}
      ></input>
      <label htmlFor="lastName">Last name:</label>
      <input
        type="text"
        id="lastName"
        onChange={event => setLastName(event.target.value)}
        value={lastName}
      ></input>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        onChange={event => setEmail(event.target.value)}
        value={email}
      ></input>
    </>
  )
}