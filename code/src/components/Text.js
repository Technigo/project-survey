/* eslint-disable no-unused-expressions */
import React from 'react'
import './text.css'

export const Text = ({ id, question, value, setText, placeholder }) => {
  return (
    <label htmlFor={id}>
      <h2>{question}</h2>
      <input
        type="text"
        id={id}
        className="text-input"
        value={value}
        onChange={(event) => setText(event.target.value)}
        placeholder={placeholder}
        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} />
    </label>
  )
}