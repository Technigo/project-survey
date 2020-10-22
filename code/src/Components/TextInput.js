import React from "react"

export const Textinput = props => {

  const { name, setName, phoneNumber, setPhoneNumber, email, setEmail, } = props

  return (
    <>
      <div className="input">
        <h2 tabIndex="0">Your contact details</h2>
        <label tabIndex="0">Name:</label>
        <input
          type="text"
          onChange={event => setName(event.target.value)}
          value={name}
          required
        ></input>
        <label tabIndex="0">Phone Number:</label>
        <input
          type="number"
          onChange={event => setPhoneNumber(event.target.value)}
          value={phoneNumber}
          required
        ></input>
        <label tabIndex="0">Email:</label>
        <input
          type="email"
          onChange={event => setEmail(event.target.value)}
          value={email}
          required
        ></input>
      </div>
    
    </>
  )
}

