import React from 'react'
import './description.css'

export const Description = (props) => {
  return (
    <p className={props.className}>{props.text}</p>
  )
}