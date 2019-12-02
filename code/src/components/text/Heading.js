import React from 'react'
import './heading.css'

export const Heading = (props) => {
  return (
    <h2 className={props.className}>
      {props.text}
    </h2>
  )
}

