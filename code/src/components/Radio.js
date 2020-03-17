import React from 'react'
import './radio.css'

export const Radio = ({ value, name, onChange, checked }) => {
  return (
    <label className="radio-container" key={value}>
      <input
        type="radio"
        className="radio-button"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        required />
      {value}
      <span className="radio-bttn" />
    </label>
  )
}
