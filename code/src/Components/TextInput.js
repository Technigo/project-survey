import React from 'react'

export const Textinput = props => {
  const {name, setName, email, setEmail} = props

  return (
  <>
    <div className="input">
      <h2>Contact Details</h2>
      <label>Name:</label>
      <input
        type="text"
        onChange={event => setName(event.target.value)}
        value={name}
        required
      ></input>
      <label>Email:</label>
      <input
        type="email"
        onChange={event => setEmail(event.target.value)}
        value={email}
        required
      ></input>
    <label>Phone-number:</label>
    <input
      type="number"
      onChange={event => SVGAnimatedNumber(event.target.value)}
      value={number}
      required
    ></input>
    </div>
    </>
  )
}