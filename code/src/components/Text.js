/* eslint-disable no-unused-expressions */
import React from 'react'
import './text.css'

export const Text = ({ title, value, setText, placeholder }) => {
  return (
    <label htmlFor={value}>
      <h2>{title}</h2>
      <input
        type="text"
        id={value}
        className="text-input"
        value={value}
        onChange={(event) => setText(event.target.value)}
        placeholder={placeholder}
        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} />
    </label>
  )
}