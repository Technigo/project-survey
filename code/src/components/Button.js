import React from 'react'
import 'components/button.css'

export const Button = ({ disabled, onClick, text }) => (
  <button className='button' disabled={disabled} onClick={onClick}>
    {text}
  </button>
)
