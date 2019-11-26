import React from 'react'

export const Radiobutton = (props) => {
  return (
    <label className="radiobutton-label">
      {props.label}
      <input className="radiobutton" type="radio" name={props.name} value={props.value} />
    </label>
  )
}