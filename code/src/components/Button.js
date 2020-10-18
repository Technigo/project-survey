import React from 'react'

export const Button = ({ button, click, disable, text }) => {
  return (
    <button type={button} onClick={click} disable={disable}>{text}</button>
  )
}