import React from 'react'
import './InputText.css'

export const InputText = ({ question, value, setName }) => {
  return (
    <label htmlFor="InputText">
      <h2>{question}</h2>
      <input
        id="InputText"
        type="text"
        placeholder='Type your name'
        className="input-text-container"
        value={value}
        onChange={(event) => setName(event.target.value)}
        onKeyPress={(event) => { event.key === 'Enter' && event.preventDefault(); }} //to prevent form to update when pressed enter 
      />
    </label>
  )
}