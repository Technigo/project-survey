import React, { useState } from 'react'
import "textInput.css"

export const TextInput = () => {
  const [name, setName] = useState(" ")
  return (
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
}