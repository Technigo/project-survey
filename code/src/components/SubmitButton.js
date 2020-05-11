import React from 'react'
import './button.css'

export const SubmitButton = ({ text }) => {

  return (
    <button type="submit" value="{text}">{text}</button >
  )
}
