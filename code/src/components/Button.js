import React from 'react'
import './button.css'

export const Button = (props) => {
  return (
    <button type="button" className="default-button">
      {props.text}
    </button>
  )
}