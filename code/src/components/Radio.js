import React from 'react'
import './radio.css'

export const Radio = ({ value, name, setSomething, checked }) => {
  return (
    <label htmlFor={value} className="radio-container">
      <input
        type="radio"
        id={value}
        className="radio-button"
        name={name}
        value={value}
        onChange={(event) => setSomething(event.target.value)}
        checked={checked}
        required />
      {value}
      <span className="radio-bttn" />
    </label>
  )
}
