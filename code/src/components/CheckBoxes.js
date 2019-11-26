import React from 'react'
import './checkboxes.css'

export const CheckBoxes = (props) => {
  return (
    <label className="checkbox-label">
      {props.label}
      <input className="checkbox" type="checkbox" name={props.name} value={props.value} />
    </label>
  )
}