import React from 'react'

const Button = ({ buttonValue, label, onEnterResponse, onInputResponse, onButtonResponse }) => {
  // const handleKeyDown = (e) => {
  //   e.preventDefault()
  //   if (e.key === 'Enter') {
  //     onEnterResponse(e)
  //     console.log('Enter pressed in texinput')
  //   }
  // }

  return (
    <input 
      className="button"
      type="button"
      id={buttonValue}
      value={label}
      onClick={() => onButtonResponse(buttonValue)}
      // onKeyDown={(e) => onEnterResponse(e)}

      >
    </input>
  )
}

export default Button