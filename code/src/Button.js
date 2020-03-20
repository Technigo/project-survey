import React from 'react'



export const Button = ({ handleClick, text }) => {

  return (
    <button type="button" onClick={handleClick} value="{text}">{text}</button >
  )
}

