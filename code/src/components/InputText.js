import React from 'react'

export const InputText = (props) => (
  <label>
    <h2>{props.label}</h2>
    <input
      type="text"
      value={props.value}
      onChange={(event) => props.setValue(event.target.value)}
      onKeyPress={(event) => { event.key === "Enter" && event.preventDefault() }} />
  </label>
)