import React from 'react'

export const Button = props => (
  <button disabled={props.disabled} onClick={props.incrementStep}>
    {props.text}
  </button>
)
