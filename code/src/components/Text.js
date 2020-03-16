/* eslint-disable linebreak-style */
import React from 'react'
import './text.css'

export const Text = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      className="text-input"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required />
  )
}