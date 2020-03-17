import React from 'react'
import "textInput.css"

export const TextInput = ({ name, setName }) => (
  <label className="textLabel">
    What's your online alias?
      <input
      className="textInput"
      type="text"
      value={name}
      placeholder="Your online alias"
      onChange={event => setName(event.target.value)}
      required />
  </label>
)
