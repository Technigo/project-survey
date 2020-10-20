import React from 'react'
import './InputText.css'

export const InputText = ({ id, question, value, setText }) => {
  return (
    <label htmlFor={id}>
      <h2>{question}</h2>
      <input
        type="text"
        id={id}
        className="input-text-container"
        value={value}
        onChange={(event) => setText(event.target.value)}
        placeholder='Type your name'
      //onKeyPress={(event) => { event.key === 'Enter' && event.preventDefault(); }}

      />
    </label>
  )
}