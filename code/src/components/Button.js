import React from 'react'

export const Button = props => (
  <button disabled={props.disabled} onClick={props.changeStep}>
    {props.text}
  </button>
)
