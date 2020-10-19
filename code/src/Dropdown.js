import React from 'react'

export const Dropdown = (props) => {
    return <div>
    <label for={props.label}>Choose a {props.label}:</label>
  
  <select name={props.label} id={props.label}>
    <option value={props.value1}>{props.value1}</option>
    <option value={props.value2}>{props.value2}</option>
    <option value={props.value3}>{props.value3}</option>
  </select>
    </div>
  }