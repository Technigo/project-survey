import React from 'react'

export const InputSelect = (props) => (

  <label>
    <h2>{props.label}</h2>
    <select
      type="select"
      value={props.value}
      onChange={(event) => props.setValue(event.target.value)}>
      <option value={props.value}>{option}</option>
    </select>
  </label>
)