import React from 'react'
import './option.css'

export const Option = ({ value, text }) => {
  return (
    <option value={value}>{text}</option>
  )
}