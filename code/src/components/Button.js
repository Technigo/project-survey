import React from 'react'

const Button = ({ buttonType, label, onButtonResponse }) => {

  return (
    <input 
      type="button"
      id={buttonType}
      value={label}
      onClick={(e) => onButtonResponse(e)}>
    </input>
  )
}

export default Button