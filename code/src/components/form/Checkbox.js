import React from 'react'
import './checkbox.css'

export const Checkbox = (props) => {
  return (
    <label className="checkbox-label">
      <input className="checkbox"
        type="checkbox"
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange} />
      <span className="checkbox-label-text">{props.label}</span>
    </label>
  )
}