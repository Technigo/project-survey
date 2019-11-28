import React from 'react'
import './button.css'

export const Button = (props) => {
  return (
    <button type="submit" className="default-button">
      {props.text}
    </button>
  )
}