import React from 'react'
import './summary.css'

export const Select = (props) => {
  return (
    <select onChange={props.onChange} value={props.value}>
      {props.children}
    </select>
  )
}