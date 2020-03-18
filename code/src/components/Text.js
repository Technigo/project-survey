import React from 'react'
import './text.css'

export const Text = ({ title, value, setText, placeholder }) => {
  return (
    <label htmlFor={title}>
      <h2>{title}</h2>
      <input
        type="text"
        id={title}
        className="text-input"
        value={value}
        onChange={(event) => setText(event.target.value)}
        placeholder={placeholder}
        required />
    </label>
  )
}