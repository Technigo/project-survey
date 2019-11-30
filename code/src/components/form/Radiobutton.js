import React from 'react'
import './radiobutton.css'

export const Radiobutton = (props) => {
  return (
    <label className="radiobutton-label">
      <input className="radiobutton" type="radio" name={props.name} value={props.value} onChange={props.onChange} checked={props.checked} />
      <span class="radiobutton-label-text">{props.label}</span>
    </label>
  )
}