import React from 'react'
import './InputText.css'

export const InputText = ({ question, value, setText }) => {
  return (
    <label htmlFor="InputText">
      <h2>{question}</h2>
      <input
        name="InputText"
        type="text"
        // id={id}
        className="input-text-container"
        value={value}
        onChange={(event) => setText(event.target.value)}
        placeholder='Type your name'
      />
    </label>
  )
}