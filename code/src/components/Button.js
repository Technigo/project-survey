import React from 'react'

const Button = ({ buttonValue, label, onButtonResponse }) => {

  return (
    <input 
      className="button"
      type="button"
      id={buttonValue}
      value={label}
      onClick={(e) => onButtonResponse(e)}
      >
    </input>
  )
}

export default Button