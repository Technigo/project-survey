import React from 'react'

export const StartButton = ({ button, click, disable, text }) => {
  return (

    <button type={button} onClick={click} disable={disable}>{text}</button>
  )
}