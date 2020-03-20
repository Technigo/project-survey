import React from 'react'
import './button.css'

export const Button = ({ handleClick, text }) => {

  return (
    <button type="button" onClick={handleClick} value="{text}">{text}</button >
  )
}

