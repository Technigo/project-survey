import React from "react";
import './Button.css'

export const Button = ({ name, section }) => {
  return (
    <button type="submit" disabled={name === "" && section === 0}>Next</button>
  )
}