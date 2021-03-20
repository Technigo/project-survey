import React from 'react'


const Button = ({onChangeDirection, textDisplay, className}) => {
  return (
    <button 
      onClick={onChangeDirection} 
      className={className}
      type='button'>
        {textDisplay}
    </button>
  )
}

export default Button