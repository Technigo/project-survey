/* eslint-disable linebreak-style */
import React from 'react'
import './radio.css'

export const Radio = ({ value, onChange, checked }) => {
  return (
    <label className="radio-container" key={value}>
      <input
        type="radio"
        className="radio-button"
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
