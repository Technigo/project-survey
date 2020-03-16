import React, { useState } from 'react'
import 'component/button.css'

export const Button = (props) => {
  return (
  <button>{props.title}</button>
  )
}