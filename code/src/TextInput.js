import React from 'react'
import './textInput.css'

export const TextInput = ({ text, input, setFunction }) => {
  return (
    <label>
      <input
        type="text"
        onChange={event => setFunction(event.target.value)}
        placeholder={text}
        value={input}
        required
      ></input>
    </label>
  )
}
