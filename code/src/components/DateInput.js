import React from 'react'

export const DateInput = ({ text, state, handleInput }) => {
  
  return (
    <label htmlFor='date'>{text}
      <input 
      type='date'
      name='date'
      value={state}
      onChange={handleInput} 
      /> 
    </label>  
  )
}