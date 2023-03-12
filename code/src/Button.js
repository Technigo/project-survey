import React from 'react'

export const Button = ({ btnText, btnClickFunction }) => {
  return (
    <button className="button" type="button" onClick={btnClickFunction}>{btnText}</button>
  )
}