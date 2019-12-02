import React from 'react'
import './select.css'

export const Select = (props) => {
  return (
    <select
      onChange={props.onChange}
      value={props.value}>
      {props.children}
    </select>
  )
}