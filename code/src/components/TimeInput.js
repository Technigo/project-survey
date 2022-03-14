import React from 'react'

export const TimeInput = ({ text, state, handleInput }) => {
  
  return (
    <label htmlFor='timeFrom'>From:
    <input 
      id='timeFrom'
      type='time'
      name='timeFrom'
      value={state}
      onChange={handleInput} 
    /> 
    </label>  
  )
}