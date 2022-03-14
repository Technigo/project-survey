import React from 'react'

export const TimeInput = ({ text, inputName, state, handleInput }) => {
  
  return (

    <label htmlFor={inputName}>{text}
    <input 
      id={inputName}
      type='time'
      name={inputName}
      value={state}
      onChange={handleInput} 
      /> 
    </label>  

  )
}