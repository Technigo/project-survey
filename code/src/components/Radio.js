/* eslint-disable linebreak-style */
import React from 'react'
import './radio.css'

export const Radio = ({ value, onChange, checked }) => {
  return (
    <label className="radio-container" key={value}>
      <input
        className="radio-button"
        type="radio"
        name={value}
        value={value}
        onChange={onChange}
        checked={checked}
        required />
      {value}
      <span className="radio-bttn" />
    </label>
  )
}
