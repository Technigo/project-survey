import React from 'react'

export const LocationInput = ({ state, handleInput }) => {
  
  return (
    <label htmlFor='date'>Date From:
      <input 
      type='date'
      name='date'
      value={state.date}
      onChange={handleInput} 
      /> 
    </label>  
  )
}