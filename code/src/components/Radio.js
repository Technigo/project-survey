import React from 'react'
import './radio.css'

export const Radio = ({ value, name, setSomething, checked }) => {
  return (
    <label className="radio-container" key={value}>
      <input
        type="radio"
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
