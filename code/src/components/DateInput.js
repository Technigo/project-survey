import React from 'react'

export const DateInput = ({ text, inputName, state, handleInput }) => {
  
  return (
    <label htmlFor={inputName}>{text}
      <input 
      type='date'
      name={inputName}
      value={state}
      onChange={handleInput} 
      /> 
    </label>  
  )
}