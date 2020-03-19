import React from 'react'

export const TextInput = ({ text, input, setFunction }) => {
  return (
    <label>
      {text}
      <input
        type="text"
        onChange={event => setFunction(event.target.value)}
        value={input}
        required
      ></input>
    </label>

  )
}
