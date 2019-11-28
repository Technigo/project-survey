import React from 'react'
import './radiobutton.css'

export const Radiobutton = (props) => {
  return (
    <label className="radiobutton-label">
      {props.label}
      <input className="radiobutton" type="radio" name={props.name} value={props.value} onChange={props.onChange} checked={props.checked} />
    </label>
  )
}